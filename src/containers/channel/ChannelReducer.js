import { combineReducers } from '@reduxjs/toolkit';

import slug from './slug/SlugReducer';
import name from './name/NameReducer';

export default combineReducers({
  slug,
  name,
});
