import { call, cancelled, put, race, take, select } from 'redux-saga/effects';

import { get } from 'src/agent';

import { channelNormalize } from 'src/schemas/item';

import selectControl from 'src/selectors/select-control';

import { actions as channelActions } from 'src/reducers/controls/channels';

import getStories from 'src/sagas/getStories';

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
  yield call(getStories, channelId, `c/${channelId}/feed`, {
    sort: 'bigbang1d',
  });
}

export default function* channelName() {
  while (true) {
    const { payload: channelId } = yield take('LOAD_CHANNEL_PAGE');

    yield race([call(runFlow, channelId), take('CANCEL_CHANNEL_PAGE')]);
  }
}
