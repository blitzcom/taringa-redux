import { combineReducers } from '@reduxjs/toolkit';

import entitiesCreator from './utils/entities-creator';

export default combineReducers({
  channels: entitiesCreator({ name: 'channels' }),
  comments: entitiesCreator({ name: 'comments' }),
  conversations: entitiesCreator({ name: 'conversations' }),
  feeds: entitiesCreator({ name: 'feeds' }),
  replies: entitiesCreator({ name: 'replies' }),
  threads: entitiesCreator({ name: 'threads' }),
  states: entitiesCreator({ name: 'states' }),
  stats: entitiesCreator({ name: 'stats' }),
  stories: entitiesCreator({ name: 'stories' }),
  users: entitiesCreator({ name: 'users' }),
});
