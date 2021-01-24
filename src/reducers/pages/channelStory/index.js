import { combineReducers } from '@reduxjs/toolkit';

import { reducer as story } from './story';

export default combineReducers({
  story,
});
