import { call, cancelled, put, select } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/feeds';
import agent from 'src/agent';
import normalize from 'src/schemas/feed';
import selectControl from 'src/selectors/select-control';

function* getStories(uniqueId, url, query = {}) {
  try {
    const control = yield select(selectControl, 'feeds', uniqueId);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(actions.load(uniqueId));

    const [body] = yield call(agent.get, url, {
      count: 20,
      sort: 'created-desc',
      filter: 'article',
      ...query,
    });

    const payload = yield call(normalize, body, uniqueId);

    yield put(actions.success(uniqueId, payload));
  } catch (e) {
    yield put(actions.failure(uniqueId, e.message));
  } finally {
    if (yield cancelled()) {
      // TODO: Handle cancel.
    }
  }
}

export default getStories;
