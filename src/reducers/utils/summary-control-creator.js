/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

const initialState = {};

export const DEFAULT_SUMMARY_CONTROL_STATE = {
  status: summaryControlStatus.Loaded,
  error: null,
};

function createSummaryControl(name) {
  const slice = createSlice({
    name: `upgrade/${name}`,
    initialState,
    reducers: {
      preload: {
        reducer(state, action) {
          state[action.meta] = {
            status: summaryControlStatus.PreLoading,
            error: null,
          };
        },
        prepare(meta) {
          return { meta };
        },
      },
      preloadFailure: {
        reducer(state, action) {
          state[action.meta] = {
            status: summaryControlStatus.PreLoadingError,
            error: action.error,
          };
        },
        prepare(meta, error) {
          return { meta, error };
        },
      },
      preloadSuccess: {
        reducer(state, action) {
          state[action.meta].status = summaryControlStatus.Upgraded;
        },
        prepare(meta, payload) {
          return { meta, payload };
        },
      },
      upgrade: {
        reducer(state, action) {
          state[action.meta] = {
            status: summaryControlStatus.Upgrading,
            error: null,
          };
        },
        prepare(meta) {
          return { meta };
        },
      },
      upgradeFailure: {
        reducer(state, action) {
          state[action.meta] = {
            status: summaryControlStatus.UpgradingError,
            error: action.error,
          };
        },
        prepare(meta, error) {
          return { meta, error };
        },
      },
      upgradeSuccess: {
        reducer(state, action) {
          state[action.meta].status = summaryControlStatus.Upgraded;
        },
        prepare(meta, payload) {
          return { meta, payload };
        },
      },
    },
    extraReducers: (builder) => {
      builder.addDefaultCase((state, action) => {
        const entities = action.payload?.entities?.[name];

        if (entities) {
          Object.keys(entities).forEach((key) => {
            if (key in state) return;

            state[key] = DEFAULT_SUMMARY_CONTROL_STATE;
          });
        }
      });
    },
  });

  return slice;
}

export default createSummaryControl;
