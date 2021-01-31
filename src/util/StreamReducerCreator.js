import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

function createStreamKey(name) {
  return `stream-${name}`;
}

function streamReducerCreator(name) {
  const entityAdapter = createEntityAdapter({});

  const slice = createSlice({
    name,
    initialState: entityAdapter.getInitialState({}),
    reducers: {},
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        const key = createStreamKey(name);

        if (action.payload?.entities?.[key]) {
          entityAdapter.upsertMany(state, action.payload.entities[key]);
        }
      });
    },
  });

  return slice;
}

export default streamReducerCreator;
