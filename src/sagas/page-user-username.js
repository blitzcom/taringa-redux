import { call, race, take } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/users';
import getStories from 'src/sagas/common/get-stories';
import normalize from 'src/schemas/user';

import summary from './common/summary';

function* run(username) {
  yield call(summary, {
    actions,
    normalize,
    pathname: `/user/${username}/about`,
    source: 'users',
    target: username,
  });

  yield call(getStories, username, `/user/${username}/feed`);
}

export default function* usernamePage() {
  while (true) {
    const { payload: username } = yield take('LOAD_USERNAME_PAGE');
    yield race([call(run, username), take('CANCEL_USERNAME_PAGE')]);
  }
}
