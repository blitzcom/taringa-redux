import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
};

const posts = createSlice({
  name: 'pages/home/posts',
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
  },
});

export const reducer = posts.reducer;

export default posts.actions;
