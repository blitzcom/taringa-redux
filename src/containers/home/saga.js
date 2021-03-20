import { call, race, take } from 'redux-saga/effects';

import getStories from 'src/sagas/get-stories';

function* run() {
  yield call(getStories, 'articles', 'feed/list/globalHome', {
    count: 35,
    filter: 'article',
    sort: 'bigbang1d',
    globalSafe: true,
    nsfw: false,
  });
}

export default function* homePage() {
  while (true) {
    yield take('LOAD_HOME_PAGE');
    yield race([call(run), take('CANCEL_HOME_PAGE')]);
  }
}
