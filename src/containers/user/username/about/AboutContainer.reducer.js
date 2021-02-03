import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'fetching',
  error: null,
  userId: null,
};

const about = createSlice({
  name: 'pages/user/username/about',
  initialState,
  reducers: {
    fetch(state) {
      state.userId = null;
      state.error = null;
      state.status = 'fetching';
    },
    success(state, action) {
      state.userId = action.payload.result;
      state.status = 'fetched';
    },
    failure(state, action) {
      state.error = action.payload;
      state.status = 'failing';
    },
    clear(state) {
      state.userId = null;
      state.error = null;
      state.status = 'fetching';
    },
  },
});

export const reducer = about.reducer;

export default about.actions;
