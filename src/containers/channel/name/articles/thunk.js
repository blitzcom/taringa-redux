import superagent from 'superagent';

import normalize from 'src/schemas/feed';

import actions from './reducer';

function thunk(channelId) {
  return (dispatch) => {
    dispatch(actions.fetch(channelId));

    return superagent
      .get(
        `https://api-user.taringa.net/c/${channelId}/feed?count=20&sort=bigbang1d&filter=article`,
      )
      .then(({ body }) => {
        const payload = normalize(body, 'channel-articles');
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
