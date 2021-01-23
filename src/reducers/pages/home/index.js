import { combineReducers } from '@reduxjs/toolkit';

import { reducer as feed } from './feed';

export default combineReducers({
  feed,
});
