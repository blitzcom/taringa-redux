import { combineReducers } from 'redux';

import controls from './controls';
import entities from './entities';

const rootReducer = combineReducers({
  controls,
  entities,
});

export default rootReducer;
