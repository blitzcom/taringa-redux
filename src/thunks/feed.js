import superagent from 'superagent';

import normalizeFeed from '@schemas/feed';

function thunk(name, path, actions) {
  return (dispatch) => {
    dispatch(actions.fetch());

    return superagent
      .get(`https://api-user.taringa.net/feed/${path}`)
      .then(({ body }) => {
        const payload = normalizeFeed(body, name);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
