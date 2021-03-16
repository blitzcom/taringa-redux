import { combineReducers } from '@reduxjs/toolkit';

import channels from './controls/channels';
import conversations from './controls/conversations';
import feeds from './controls/feeds';
import stories from './controls/stories';
import users from './controls/users';

export default combineReducers({
  channels: channels.reducer,
  conversations: conversations.reducer,
  feeds: feeds.reducer,
  stories: stories.reducer,
  users: users.reducer,
});
