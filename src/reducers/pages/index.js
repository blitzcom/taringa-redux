import { combineReducers } from '@reduxjs/toolkit';

import channel from './channel';
import home from './home';

export default combineReducers({
  channel,
  home,
});
