import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
};

const feed = createSlice({
  name: 'pages/home/feed',
  initialState,
  reducers: {
    fetch(state) {
      if (state.status !== 'fetching') {
        status.status = 'fetching';
        status.error = null;
      }
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

export const reducer = feed.reducer;

export default feed.actions;
