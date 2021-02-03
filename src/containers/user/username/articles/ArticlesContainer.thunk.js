import superagent from 'superagent';

import normalize, { STREAMS } from 'src/stream/Stream.schema';

import actions from './ArticlesContainer.reducer';

function thunk(username) {
  return (dispatch) => {
    dispatch(actions.fetch(username));

    return superagent
      .get(
        `https://api-user.taringa.net/user/${username}/feed?count=20&filter=article`,
      )
      .then(({ body }) => {
        const payload = normalize(body, username, STREAMS.USERS);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
