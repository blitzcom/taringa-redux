import superagent from 'superagent';

import actions from '@reducers/pages/channel/slug/comments';

import normalize from '@schemas/comment';

function thunk(storyId) {
  return (dispatch) => {
    dispatch(actions.fetch(storyId));

    return superagent
      .get(`https://api-user.taringa.net/story/${storyId}/comments`)
      .then((response) => {
        const payload = normalize(response.body, storyId);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
