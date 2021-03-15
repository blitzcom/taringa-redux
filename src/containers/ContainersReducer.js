import { combineReducers } from '@reduxjs/toolkit';

import channel from './channel/ChannelReducer';

export default combineReducers({
  channel,
});
