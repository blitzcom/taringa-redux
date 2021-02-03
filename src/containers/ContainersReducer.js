import { combineReducers } from '@reduxjs/toolkit';

import channel from './channel/ChannelReducer';
import home from './home/HomeReducer';
import user from './user/UserReducer';

export default combineReducers({
  channel,
  home,
  user,
});
