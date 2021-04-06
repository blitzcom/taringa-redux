import { call, cancelled, put, race, select, take } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/users';
import agent from 'src/agent';
import getStories from 'src/sagas/common/get-stories';
import normalize from 'src/schemas/user';
import selectControl from 'src/selectors/select-control';

function* getUserAbout(username) {
  try {
    const control = yield select(selectControl, 'users', username);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(actions.load(username));

    const [body] = yield call(agent.get, `/user/${username}/about`);
    const payload = yield call(normalize, body);

    yield put(actions.success(username, payload));
  } catch (e) {
    yield put(actions.failure(username, e.message));
  } finally {
    if (yield cancelled()) {
      // TODO: Handle cancel.
    }
  }
}

function* run(username) {
  yield call(getUserAbout, username);
  yield call(getStories, username, `/user/${username}/feed`);
}

export default function* usernamePage() {
  while (true) {
    const { payload: username } = yield take('LOAD_USERNAME_PAGE');
    yield race([call(run, username), take('CANCEL_USERNAME_PAGE')]);
  }
}
