import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
};

const story = createSlice({
  name: 'pages/channel/slug/story',
  initialState,
  reducers: {
    fetch(state) {
      state.status = 'fetching';
      state.error = null;
    },
    success(state) {
      state.status = 'fetched';
    },
    failure(state, action) {
      state.status = 'failing';
      state.error = action.payload;
    },
    clear(state) {
      state.status = 'fetching';
      state.error = null;
    },
  },
});

export const reducer = story.reducer;

export default story.actions;
