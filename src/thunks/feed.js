import superagent from 'superagent';

import normalizeFeed from '@schemas/feed';

import actions from '@reducers/pages/home/feed';

function fetchFeedAsync() {
  return (dispatch) => {
    dispatch(actions.fetch());

    return superagent
      .get(
        'https://api-user.taringa.net/feed/global?count=20&filter=article&nsfw=false&period=week&sort=tops',
      )
      .then(({ body }) => {
        const payload = normalizeFeed(body);
        dispatch(actions.success(payload));
      })
      .catch((e) => {
        dispatch(actions.failure(e.message));
      });
  };
}

export default fetchFeedAsync;
