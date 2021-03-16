import { call, put, select } from 'redux-saga/effects';

import { actions } from 'src/reducers/controls/conversations';
import { get } from 'src/agent';
import normalize from 'src/schemas/comment';
import selectControl from 'src/selectors/select-control';

function* getConversation(target) {
  try {
    const control = yield select(selectControl, 'conversations', target);

    if (control?.status === 'loaded') {
      return;
    }

    yield put(actions.load({ target }));

    const { body } = yield call(get, `story/${target}/comments`, {
      sort: 'created-desc',
      count: 50,
      repliesCount: 20,
      repliesSort: 'created-desc',
    });

    const payload = yield call(normalize, body, target);

    yield put(actions.success({ ...payload, target }));
  } catch (e) {
    yield put(actions.failure({ target }, e.message));
  }
}

export default getConversation;
