import { call, put, race, select, take } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/stories';
import { get } from 'src/agent';
import normalize from 'src/schemas/item';
import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import getConversation from 'src/sagas/get-conversation';

function* getStory(target) {
  try {
    const control = yield select(selectControl, 'stories', target);

    if (control?.status === 'loaded') {
      const entity = yield select(selectEntity, 'stories', target);

      if (entity.type === 'story') {
        return;
      }
    }

    yield put(actions.load(target));

    const { body } = yield call(get, `story/${target}`);

    const payload = yield call(normalize, body);

    yield put(actions.success(target, payload));
  } catch (e) {
    yield put(actions.failure(target, e.message));
  }
}

function* run(storyId) {
  yield call(getStory, storyId);
  yield call(getConversation, storyId);
}

export default function* channelSlugPage() {
  while (true) {
    const { payload: storyId } = yield take('LOAD_CHANNEL_SLUG_PAGE');
    yield race([call(run, storyId), take('CANCEL_CHANNEL_SLUG_PAGE')]);
  }
}
