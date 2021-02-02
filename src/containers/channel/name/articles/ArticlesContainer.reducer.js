import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
  channelId: null,
};

const articles = createSlice({
  name: 'pages/channel/name/articles',
  initialState,
  reducers: {
    fetch(state) {
      state.channelId = null;
      state.error = null;
      state.status = 'fetching';
    },
    success(state, action) {
      state.channelId = action.payload.result;
      state.status = 'fetched';
    },
    failure(state, action) {
      state.error = action.payload;
      state.status = 'failing';
    },
    clear(state) {
      state.channelId = null;
      state.error = null;
      state.status = 'fetching';
    },
  },
});

export const reducer = articles.reducer;

export default articles.actions;
