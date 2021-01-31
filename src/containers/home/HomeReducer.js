import { combineReducers } from '@reduxjs/toolkit';

import { reducer as articles } from './articles/ArticlesContainer.reducer';

export default combineReducers({
  articles,
});
