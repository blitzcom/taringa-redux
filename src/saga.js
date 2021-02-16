import { all } from 'redux-saga/effects';

import channelName from 'src/containers/channel/name/saga';

export default function* rootSaga() {
  yield all([channelName()]);
}
