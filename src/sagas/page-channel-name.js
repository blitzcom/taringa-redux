import { call, race, take } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/channels';
import getStories from 'src/sagas/common/get-stories';
import normalize from 'src/schemas/channel';

import summary from './common/summary';

function* runFlow(channelId) {
  yield call(summary, {
    actions,
    normalize,
    pathname: `/c/${channelId}/about`,
    source: 'channels',
    target: channelId,
  });

  yield call(getStories, channelId, `/c/${channelId}/feed`, {
    sort: 'bigbang1d',
  });
}

export default function* channelName() {
  while (true) {
    const { payload: channelId } = yield take('LOAD_CHANNEL_PAGE');

    yield race([call(runFlow, channelId), take('CANCEL_CHANNEL_PAGE')]);
  }
}
