import { combineReducers } from '@reduxjs/toolkit';

import StoryPrepare from 'src/story/Story.prepare';

import containers from 'src/containers/ContainersReducer';

import EntityReducerCreator from 'src/util/EntityReducerCreator';
import StreamReducerCreator from 'src/util/StreamReducerCreator';

const channels = EntityReducerCreator('channels');
const comments = EntityReducerCreator('comments');
const feeds = EntityReducerCreator('feeds');
const items = EntityReducerCreator('items', StoryPrepare);
const replies = EntityReducerCreator('replies');
const states = EntityReducerCreator('states');
const stats = EntityReducerCreator('stats');
const users = EntityReducerCreator('users');

const objects = combineReducers({
  channels: channels.reducer,
  comments: comments.reducer,
  feeds: feeds.reducer,
  items: items.reducer,
  replies: replies.reducer,
  states: states.reducer,
  stats: stats.reducer,
  users: users.reducer,
});

const streamComments = StreamReducerCreator('comments');
const streamContainers = StreamReducerCreator('containers');
const streamReplies = StreamReducerCreator('replies');
const streamUser = StreamReducerCreator('users');

const streams = combineReducers({
  comments: streamComments.reducer,
  containers: streamContainers.reducer,
  replies: streamReplies.reducer,
  users: streamUser.reducer,
});

const reducer = {
  containers,
  objects,
  streams,
};

export default reducer;
