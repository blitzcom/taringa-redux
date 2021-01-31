import superagent from 'superagent';

import normalize from 'schemas/item';

import actions from './StoryContainer.reducer';

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
