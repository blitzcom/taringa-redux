import controlsCreator from 'src/reducers/utils/controls-creator';

const reducer = controlsCreator({ name: 'feeds' });

export const actions = reducer.actions;

export default reducer;
