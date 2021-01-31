import superagent from 'superagent';

import normalize from 'schemas/comment';

import actions from './CommentsContainer.reducer';

function thunk(storyId) {
  return (dispatch) => {
    dispatch(actions.fetch(storyId));

    return superagent
      .get(
        `https://api-user.taringa.net/story/${storyId}/comments?sort=created-desc&count=50&repliesCount=20&repliesSort=created-desc`,
      )
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
