import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const IDENTITY_PREPARE = (state) => state;

function entityReducerCreator(name, prepare = IDENTITY_PREPARE) {
  const entityAdapter = createEntityAdapter({});

  const slice = createSlice({
    name,
    initialState: entityAdapter.getInitialState({}),
    reducers: {},
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        if (action.payload?.entities?.[name]) {
          const entities = action.payload.entities[name];

          const payload = Object.fromEntries(
            Object.entries(entities).map(([key, value]) => [
              key,
              prepare(value, key, entities),
            ]),
          );

          entityAdapter.upsertMany(state, payload);
        }
      });
    },
  });

  return slice;
}

export default entityReducerCreator;
