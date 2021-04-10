import { call, delay, put, select } from 'redux-saga/effects';

import agent from 'src/agent';
import selectControl from 'src/selectors/select-control';
import summaryControlStatus from 'src/reducers/constants/summary-control-status';

function* getResource(pathname) {
  for (let i = 0; i < 10; i += 1) {
    const [body, status] = yield call(agent.get, pathname);

    if (status === 200) {
      return body;
    }

    yield delay(2 ** i * 2000);
  }

  throw new Error('Resource upgrade failed.');
}

function* fetchResource(options) {
  const { start, success, target, pathname, normalize } = options;

  yield put(start(target));
  const body = yield call(getResource, pathname);
  const payload = yield call(normalize, body);
  yield put(success(target, payload));
}

export default function* run(options) {
  const { actions, normalize, pathname, target, source } = options;
  const fetchOptions = { normalize, pathname, target };

  const control = yield select(selectControl, source, target);

  if (typeof control === 'undefined') {
    yield call(fetchResource, {
      ...fetchOptions,
      start: actions.preload,
      success: actions.preloadSuccess,
    });

    return;
  }

  if (control.status === summaryControlStatus.Loaded) {
    yield call(fetchResource, {
      ...fetchOptions,
      start: actions.upgrade,
      success: actions.upgradeSuccess,
    });
  }
}
