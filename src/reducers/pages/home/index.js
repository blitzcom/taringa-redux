import { combineReducers } from '@reduxjs/toolkit';

import { reducer as feed } from './feed';
import { reducer as posts } from './posts';

export default combineReducers({
  feed,
  posts,
});
