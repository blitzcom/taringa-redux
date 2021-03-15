import controlsCreator from 'src/reducers/utils/controls-creator';

const reducer = controlsCreator({ name: 'users' });

const { actions } = reducer;

export { actions };

export default reducer;
