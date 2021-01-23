import {
  combineReducers,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

function createEntity(name) {
  const entityAdapter = createEntityAdapter({});

  const slice = createSlice({
    name,
    initialState: entityAdapter.getInitialState({}),
    reducers: {},
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        if (action.payload?.entities?.[name]) {
          entityAdapter.upsertMany(state, action.payload.entities[name]);
        }
      });
    },
  });

  return slice;
}

const channels = createEntity('channels');
const feeds = createEntity('feeds');
const items = createEntity('items');
const states = createEntity('states');
const stats = createEntity('stats');
const users = createEntity('users');

export default combineReducers({
  channels: channels.reducer,
  feeds: feeds.reducer,
  items: items.reducer,
  states: states.reducer,
  stats: stats.reducer,
  users: users.reducer,
});
