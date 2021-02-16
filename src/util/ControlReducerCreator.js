import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  status: 'fetching',
  error: null,
};

function controlReducerCreator(name) {
  const slice = createSlice({
    name,
    initialState: {},
    reducers: {
      fetch(state, action) {
        state[action.payload] = defaultState;
      },
      success(state, action) {
        state[action.payload.target].status = 'fetched';
      },
      failure(state, action) {
        state[action.payload.target].status = 'failing';
        state[action.payload.target].error = action.payload.message;
      },
      reset(state, action) {
        state[action.payload] = defaultState;
      },
      ready() {},
    },
  });

  return slice;
}

export default controlReducerCreator;
