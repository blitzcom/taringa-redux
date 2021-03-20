/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const DEFAULT_STATE = { status: 'loading', error: null };

function createControl(name) {
  const slice = createSlice({
    name: `controls/${name}`,
    initialState,
    reducers: {
      load: {
        reducer(state, action) {
          state[action.meta] = DEFAULT_STATE;
        },
        prepare(meta) {
          return { meta };
        },
      },
      success: {
        reducer(state, action) {
          state[action.meta].status = 'loaded';
        },
        prepare(meta, payload) {
          return { meta, payload };
        },
      },
      failure: {
        reducer(state, action) {
          state[action.meta].status = 'failure';
          state[action.meta].error = action.error;
        },
        prepare(meta, error) {
          return { meta, error };
        },
      },
    },
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        const entities = action.payload?.entities?.[name];

        if (entities) {
          Object.keys(entities).forEach((key) => {
            if (key in state) return;

            state[key] = { status: 'loaded', error: null };
          });
        }
      });
    },
  });

  return slice;
}

export default createControl;
