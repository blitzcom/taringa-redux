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
        const key = `stream-${name}`;

        if (action.payload?.entities?.[key]) {
          entityAdapter.upsertMany(state, action.payload.entities[key]);
        }
      });
    },
  });

  return slice;
}

const replies = createEntity('replies');
const comments = createEntity('comments');

export default combineReducers({
  replies: replies.reducer,
  comments: comments.reducer,
});
