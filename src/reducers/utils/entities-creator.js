/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const DEFAULT_MAPPER = (_, entity) => entity;

function createEntities(name, mapper = DEFAULT_MAPPER) {
  const slice = createSlice({
    name: `entities/${name}`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        const entities = action.payload?.entities?.[name];

        if (entities) {
          Object.entries(entities).forEach(([key, value]) => {
            state[key] = mapper(state[key], value);
          });
        }
      });
    },
  });

  return slice;
}

export default createEntities;
