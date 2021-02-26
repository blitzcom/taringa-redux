import invariant from 'invariant';
import merge from 'lodash.merge';

const DEFAULT_STATE = {};

function entitiesCreator(options = {}) {
  const { name } = options;

  invariant(!!name, 'reducer.entitiesCreator: must provide a valid name');

  function entities(state = DEFAULT_STATE, action) {
    const entities = action.payload?.entities?.[name];

    if (entities) {
      return merge({}, state, entities);
    }

    return state;
  }

  return entities;
}

export default entitiesCreator;
