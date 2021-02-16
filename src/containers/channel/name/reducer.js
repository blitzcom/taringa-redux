import { combineReducers } from '@reduxjs/toolkit';

import { reducer as about } from './about/reducer';
import { reducer as articles } from './articles/reducer';

export default combineReducers({
  about,
  articles,
});
