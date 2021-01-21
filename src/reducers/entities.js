import merge from 'lodash.merge';

function entities(state = {}, action) {
  switch (action.type) {
    default: {
      if (
        action.payload &&
        action.payload.entities &&
        action.payload.entities
      ) {
        return merge({}, state, action.payload.entities);
      }

      return state;
    }
  }
}

export default entities;
