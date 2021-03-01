import { call, cancelled, put, race, take, select } from 'redux-saga/effects';

import { get } from 'src/agent';

import { channelNormalize } from 'src/schemas/item';
import articlesNormalize from 'src/schemas/feed';

import selectControl from 'src/selectors/select-control';

import { actions as channelActions } from 'src/reducers/controls/channels';
import { actions as feedActions } from 'src/reducers/controls/feeds';

function* getArticles(channelId) {
  try {
    const control = yield select(selectControl, 'feeds', channelId);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(feedActions.load({ target: channelId }));

    const { body } = yield call(get, `c/${channelId}/feed`, {
      count: 20,
      sort: 'bigbang1d',
      filter: 'article',
    });

    const payload = yield call(articlesNormalize, body, channelId);

    yield put(feedActions.success({ ...payload, target: channelId }));
  } catch (e) {
    yield put(feedActions.failure({ target: channelId }, e.message));
  } finally {
    if (yield cancelled()) {
      // TODO: Handle cancel.
    }
  }
}

function* getAbout(channelId) {
  try {
    const control = yield select(selectControl, 'channels', channelId);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(channelActions.load({ target: channelId }));

    const { body } = yield call(get, `c/${channelId}/about`);

    const payload = yield call(channelNormalize, body);

    yield put(channelActions.success({ ...payload, target: channelId }));
  } catch (e) {
    yield put(channelActions.failure({ target: channelId }, e.message));
  } finally {
    if (yield cancelled()) {
      // TODO: Handle cancel.
    }
  }
}

function* runFlow(channelId) {
  yield call(getAbout, channelId);
  yield call(getArticles, channelId);
}

export default function* channelName() {
  while (true) {
    const { payload: channelId } = yield take('LOAD_CHANNEL_PAGE');

    yield race([call(runFlow, channelId), take('CANCEL_CHANNEL_PAGE')]);
  }
}
