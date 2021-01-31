import { combineReducers } from '@reduxjs/toolkit';

import channel from './channel/ChannelReducer';
import home from './home/HomeReducer';

export default combineReducers({
  channel,
  home,
});
