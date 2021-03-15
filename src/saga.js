import { all } from 'redux-saga/effects';

import channelName from 'src/containers/channel/name/saga';
import homePage from 'src/containers/home/saga';
import usernamePage from 'src/containers/user/username/saga';

export default function* rootSaga() {
  yield all([channelName(), usernamePage(), homePage()]);
}
