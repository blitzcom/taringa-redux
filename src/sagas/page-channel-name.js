import { call, cancelled, put, race, take, select } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/channels';
import { channelNormalize } from 'src/schemas/item';
import { get } from 'src/agent';
import getStories from 'src/sagas/common/get-stories';
import selectControl from 'src/selectors/select-control';

function* getAbout(channelId) {
  try {
    const control = yield select(selectControl, 'channels', channelId);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(actions.load(channelId));

    const { body } = yield call(get, `c/${channelId}/about`);

    const payload = yield call(channelNormalize, body);

    yield put(actions.success(channelId, payload));
  } catch (e) {
    yield put(actions.failure(channelId, e.message));
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
