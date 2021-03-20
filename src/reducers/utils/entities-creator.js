/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

function createEntities(name, reducers = {}) {
  const slice = createSlice({
    name: `entities/${name}`,
    initialState,
    reducers,
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        const entities = action.payload?.entities?.[name];

        if (entities) {
          Object.entries(entities).forEach(([key, value]) => {
            state[key] = value;
          });
        }
      });
    },
  });

  return slice;
}

export default createEntities;
