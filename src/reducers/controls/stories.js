import controlsCreator from 'src/reducers/utils/controls-creator';

const reducer = controlsCreator({ name: 'stories' });

const { actions } = reducer;

export { actions };

export default reducer;
