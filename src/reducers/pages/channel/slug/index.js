import { combineReducers } from '@reduxjs/toolkit';

import { reducer as comments } from './comments';
import { reducer as story } from './story';

export default combineReducers({
  comments,
  story,
});
