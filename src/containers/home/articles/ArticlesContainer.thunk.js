import superagent from 'superagent';

import normalize from 'src/schemas/feed';

import actions from './ArticlesContainer.reducer';

const PATH =
  'list/globalHome?count=35&filter=article&sort=bigbang1d&globalSafe=true&nsfw=false';

function thunk() {
  return (dispatch) => {
    dispatch(actions.fetch());

    return superagent
      .get(`https://api-user.taringa.net/feed/${PATH}`)
      .then(({ body }) => {
        const payload = normalize(body, 'articles');
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default thunk;
