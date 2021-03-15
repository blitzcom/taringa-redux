import { call, cancelled, put, select } from 'redux-saga/effects';

import { get } from 'src/agent';

import normalize from 'src/schemas/feed';

import selectControl from 'src/selectors/select-control';

import { actions as feedActions } from 'src/reducers/controls/feeds';

function* getStories(uniqueId, url, query = {}) {
  try {
    const control = yield select(selectControl, 'feeds', uniqueId);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(feedActions.load({ target: uniqueId }));

    const { body } = yield call(get, url, {
      count: 20,
      sort: 'created-desc',
      filter: 'article',
      ...query,
    });

    const payload = yield call(normalize, body, uniqueId);

    yield put(feedActions.success({ ...payload, target: uniqueId }));
  } catch (e) {
    yield put(feedActions.failure({ target: uniqueId }, e.message));
  } finally {
    if (yield cancelled()) {
      // TODO: Handle cancel.
    }
  }
}

export default getStories;
