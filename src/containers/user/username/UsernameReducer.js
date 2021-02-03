import { combineReducers } from '@reduxjs/toolkit';

import { reducer as about } from './about/AboutContainer.reducer';
import { reducer as articles } from './articles/ArticlesContainer.reducer';

export default combineReducers({
  about,
  articles,
});
