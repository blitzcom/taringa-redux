import { combineReducers } from '@reduxjs/toolkit';

import StoryPrepare from 'story/Story.prepare';

import containers from 'containers/ContainersReducer';

import EntityReducerCreator from 'util/EntityReducerCreator';
import StreamReducerCreator from 'util/StreamReducerCreator';

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

const streams = combineReducers({
  comments: streamComments.reducer,
  containers: streamContainers.reducer,
  replies: streamReplies.reducer,
});

const reducer = {
  containers,
  objects,
  streams,
};

export default reducer;
