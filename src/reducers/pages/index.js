import { combineReducers } from '@reduxjs/toolkit';

import channelStory from './channelStory';
import home from './home';

export default combineReducers({
  channelStory,
  home,
});
