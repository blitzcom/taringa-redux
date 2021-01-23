import { combineReducers } from 'redux';

import controls from './controls';
import objects from './entities';

const rootReducer = {
  controls,
  objects,
};

export default rootReducer;
