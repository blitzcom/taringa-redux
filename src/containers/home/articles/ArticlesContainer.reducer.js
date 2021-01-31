import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
};

const articles = createSlice({
  name: 'pages/home/articles',
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

export const reducer = articles.reducer;

export default articles.actions;
