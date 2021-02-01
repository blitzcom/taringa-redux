import { configureStore } from '@reduxjs/toolkit';

import reducer from 'src/reducer';

const store = configureStore({
  reducer,
});

export default store;
