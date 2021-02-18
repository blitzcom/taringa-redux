import {
  all,
  call,
  cancelled,
  put,
  race,
  take,
  select,
} from 'redux-saga/effects';

import { get } from 'src/agent';

import { channelNormalize } from 'src/schemas/item';
import articlesNormalize from 'src/schemas/feed';

import selectControl from 'src/util/selectors/selectControl';

function* getArticles(channelId) {
  try {
    yield take([
      'control/channel/about/success',
      'control/channel/about/ready',
    ]);

    const control = yield select(selectControl, 'channel/articles', channelId);

    if (control?.status === 'fetched') {
      return;
    }

    yield put({ type: 'control/channel/articles/fetch', payload: channelId });

    const { body } = yield call(get, `c/${channelId}/feed`, {
      count: 20,
      sort: 'bigbang1d',
      filter: 'article',
    });

    const payload = yield call(articlesNormalize, body, channelId);

    yield put({
      type: 'control/channel/articles/success',
      payload: { ...payload, target: channelId },
    });
  } catch (e) {
    yield put({
      type: 'control/channel/articles/failure',
      payload: { target: channelId, message: e.message },
    });
  } finally {
    if (yield cancelled()) {
      yield put({
        type: 'control/channel/articles/reset',
        payload: channelId,
      });
    }
  }
}

function* getAbout(channelId) {
  try {
    const control = yield select(selectControl, 'channel/about', channelId);

    if (control?.status === 'fetched') {
      yield put({ type: 'control/channel/about/ready', payload: channelId });
      return;
    }

    yield put({ type: 'control/channel/about/fetch', payload: channelId });

    const { body } = yield call(get, `c/${channelId}/about`);

    const payload = yield call(channelNormalize, body);

    yield put({
      type: 'control/channel/about/success',
      payload: { ...payload, target: channelId },
    });
  } catch (e) {
    yield put({
      type: 'control/channel/about/failure',
      payload: { target: channelId, message: e.message },
    });
  } finally {
    if (yield cancelled()) {
      yield put({
        type: 'control/channel/about/reset',
        payload: channelId,
      });
    }
  }
}

export default function* channelName() {
  while (true) {
    const { payload: channelId } = yield take('LOAD_CHANNEL_PAGE');

    yield race([
      all([call(getArticles, channelId), call(getAbout, channelId)]),
      take('CANCEL_CHANNEL_PAGE'),
    ]);
  }
}
