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

export const reducer = about.reducer;

export default about.actions;
