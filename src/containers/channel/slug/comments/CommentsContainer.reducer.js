import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
};

const comments = createSlice({
  name: 'pages/channel/slug/comments',
  initialState,
  reducers: {
    fetch(state) {
      if (state.status !== 'fetching') {
        state.status = 'fetching';
        state.error = null;
      }
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

export const reducer = comments.reducer;

export default comments.actions;
