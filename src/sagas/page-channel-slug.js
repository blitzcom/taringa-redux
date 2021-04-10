import { call, race, take } from 'redux-saga/effects';
import invariant from 'invariant';

import { actions } from 'src/reducers/controls/stories';
import getConversation from 'src/sagas/common/get-conversation';
import normalize from 'src/schemas/item';

import summary from './common/summary';

function* run(storyId) {
  try {
    yield call(summary, {
      actions,
      normalize,
      pathname: `/story/${storyId}`,
      source: 'stories',
      target: storyId,
    });

    yield call(getConversation, storyId);
  } catch (e) {
    invariant(typeof e === 'undefined', `page-channel-slug: ${e.message}`);
  }
}

export default function* channelSlugPage() {
  while (true) {
    const { payload: storyId } = yield take('LOAD_CHANNEL_SLUG_PAGE');
    yield race([call(run, storyId), take('CANCEL_CHANNEL_SLUG_PAGE')]);
  }
}
