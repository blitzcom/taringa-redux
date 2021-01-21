import superagent from 'superagent';

import normalizeFeed from '@schemas/feed';

function fetchFeedAsync() {
  return (dispatch) => {
    dispatch({ type: 'control/home/FETCH' });

    return superagent
      .get(
        'https://api-user.taringa.net/feed/global?count=20&filter=article&nsfw=false&period=week&sort=tops',
      )
      .then(({ body }) => {
        const payload = normalizeFeed(body);
        dispatch({ type: 'control/home/SUCCESS', payload });
      })
      .catch((e) => {
        dispatch({ type: 'control/home/FAILURE', error: e.message });
      });
  };
}

export default fetchFeedAsync;
