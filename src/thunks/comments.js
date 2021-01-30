import superagent from 'superagent';

import normalize from '@schemas/comment';

function thunk(storyId) {
  return (dispatch) => {
    return superagent
      .get(`https://api-user.taringa.net/story/${storyId}/comments`)
      .then((response) => {
        const payload = normalize(response.body, storyId);
        dispatch({ type: 'comments/LOAD', payload });
      });
  };
}

export default thunk;
