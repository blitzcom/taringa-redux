import controlsCreator from 'src/reducers/utils/controls-creator';

const reducer = controlsCreator({ name: 'conversations' });

const { actions } = reducer;

export { actions };

export default reducer;
