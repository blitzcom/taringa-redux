import superagent from 'superagent';

import actions from '@reducers/pages/channelStory/story';

import normalize from '@schemas/item';

function thunk(storyId) {
  return (dispatch) => {
    dispatch(actions.fetch(storyId));

    return superagent
      .get(`https://api-user.taringa.net/story/${storyId}`)
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
