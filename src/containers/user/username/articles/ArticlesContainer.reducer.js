import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
  username: null,
};

const articles = createSlice({
  name: 'pages/user/username/articles',
  initialState,
  reducers: {
    fetch(state) {
      state.username = null;
      state.error = null;
      state.status = 'fetching';
    },
    success(state, action) {
      state.username = action.payload.result;
      state.status = 'fetched';
    },
    failure(state, action) {
      state.error = action.payload;
      state.status = 'failing';
    },
    clear(state) {
      state.username = null;
      state.error = null;
      state.status = 'fetching';
    },
  },
});

export const reducer = articles.reducer;

export default articles.actions;
