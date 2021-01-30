import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  status: 'fetching',
  storyId: null,
};

const story = createSlice({
  name: 'pages/channel/slug/story',
  initialState,
  reducers: {
    fetch(state, action) {
      state.error = null;
      state.status = 'fetching';
      state.storyId = action.payload;
    },
    success(state) {
      state.status = 'fetched';
    },
    failure(state, action) {
      state.status = 'failing';
      state.error = action.payload;
    },
  },
});

export const reducer = story.reducer;

export default story.actions;
