import { all } from 'redux-saga/effects';

import PageChannelName from 'src/sagas/page-channel-name';
import PageChannelSlug from 'src/sagas/page-channel-slug';
import PageHome from 'src/sagas/page-home';
import PageUserUsername from 'src/sagas/page-user-username';

export default function* rootSaga() {
  yield all([
    PageChannelName(),
    PageChannelSlug(),
    PageHome(),
    PageUserUsername(),
  ]);
}
