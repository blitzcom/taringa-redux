import { combineReducers } from 'redux';

const defaultFetching = {
  status: 'fetching',
  error: null,
};

function createControl(target) {
  function control(state = defaultFetching, action) {
    switch (action.type) {
      case `control/${target}/FETCH`:
        return {
          ...state,
          error: null,
          status: 'fetching',
        };
      case `control/${target}/SUCCESS`:
        return {
          ...state,
          status: 'fetched',
        };
      case `control/${target}/FAILURE`:
        return {
          ...state,
          error: action.error,
          status: 'failing',
        };
      default:
        return state;
    }
  }

  return control;
}

const feeds = combineReducers({
  home: createControl('home'),
});

export default combineReducers({
  feeds,
});
