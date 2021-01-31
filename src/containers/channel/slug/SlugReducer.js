import { combineReducers } from '@reduxjs/toolkit';

import { reducer as comments } from './comments/CommentsContainer.reducer';
import { reducer as story } from './story/StoryContainer.reducer';

export default combineReducers({
  comments,
  story,
});
