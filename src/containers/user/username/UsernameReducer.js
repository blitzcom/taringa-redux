import { combineReducers } from '@reduxjs/toolkit';

import { reducer as about } from './about/AboutContainer.reducer';

export default combineReducers({
  about,
});
