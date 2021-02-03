import superagent from 'superagent';

import normalize from 'src/schemas/user';

import actions from './AboutContainer.reducer';

function thunk(userId) {
  return (dispatch) => {
    dispatch(actions.fetch(userId));

    return superagent
      .get(`https://api-user.taringa.net/user/${userId}/about`)
      .then(({ body }) => {
        const payload = normalize(body);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
