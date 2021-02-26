const DEFAULT_STATE = {};

export const DEFAULT_CONTROL_STATE = { status: 'loading', error: null };

function actionCreator(target, space, name) {
  const type = `controls/${space}/${name}`;

  target[name] = function (payload, error) {
    const action = { type, payload };

    if (error) {
      Object.assign(action, { error });
    }

    return action;
  };

  target[name].type = type;
}

function controlsCreator(options = {}) {
  const name = options.name ?? DEFAULT_ENTITY_NAME;

  const actions = {};

  actionCreator(actions, name, 'load');
  actionCreator(actions, name, 'success');
  actionCreator(actions, name, 'failure');

  function fetching(state = DEFAULT_CONTROL_STATE, action) {
    switch (action.type) {
      case actions.load.type:
        return { ...state, status: 'loading', error: null };
      case actions.success.type:
        return { ...state, status: 'loaded' };
      case actions.failure.type:
        return { ...state, status: 'failure', error: action.error };
      default:
        return state;
    }
  }

  function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case actions.load.type:
      case actions.success.type:
      case actions.failure.type: {
        return {
          ...state,
          [action.payload]: fetching(state[action.payload], action),
        };
      }

      default: {
        const entities = action.payload?.entities?.[name];

        if (entities) {
          return Object.keys(entities).reduce((prev, current) => {
            if (current in state) {
              return prev;
            }

            return { ...prev, [current]: { status: 'loaded', error: null } };
          }, state);
        }

        return state;
      }
    }
  }

  return { actions, reducer };
}

export default controlsCreator;
