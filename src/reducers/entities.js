import { combineReducers } from '@reduxjs/toolkit';

import channels from './entities/channels';
import comments from './entities/comments';
import conversations from './entities/conversations';
import feeds from './entities/feeds';
import replies from './entities/replies';
import states from './entities/states';
import stats from './entities/stats';
import stories from './entities/stories';
import threads from './entities/threads';
import users from './entities/users';

export default combineReducers({
  channels,
  comments,
  conversations,
  feeds,
  replies,
  states,
  stats,
  stories,
  threads,
  users,
});
