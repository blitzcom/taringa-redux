import superagent from 'superagent';

import { channelNormalize } from 'src/schemas/item';

import actions from './AboutContainer.reducer';

function thunk(channelId) {
  return (dispatch) => {
    dispatch(actions.fetch(channelId));

    return superagent
      .get(`https://api-user.taringa.net/c/${channelId}/about`)
      .then(({ body }) => {
        const payload = channelNormalize(body);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
