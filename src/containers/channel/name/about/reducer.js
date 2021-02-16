import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
  channelId: null,
};

const about = createSlice({
  name: 'pages/channel/name/about',
  initialState,
  reducers: {
    fetch(state) {
      state.channelId = null;
      state.error = null;
      state.status = 'fetching';
    },
    success(state, action) {
      if (state.status !== 'cancel') {
        state.status = 'fetched';
        state.channelId = action.payload.result;
      }
    },
    failure(state, action) {
      if (state.status !== 'cancel') {
        state.error = action.payload;
        state.status = 'failing';
      }
    },
    clean(state) {
      state.channelId = null;
      state.error = null;
      state.status = 'fetching';
    },
    cancel(state) {
      state.status = 'cancel';
    },
  },
});

export const reducer = about.reducer;

export default about.actions;
