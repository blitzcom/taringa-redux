import superagent from 'superagent';

import normalize from 'src/schemas/feed';

import actions from './ArticlesContainer.reducer';

const PATH =
  'list/globalHome?count=35&filter=article&sort=bigbang1d&globalSafe=true&nsfw=false';

function thunk() {
  return (dispatch, getState) => {
    const state = getState();
    const control = state.containers.home.articles;

    if (control.status === 'fetched') {
      return Promise.resolve();
    }

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
