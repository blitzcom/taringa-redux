import createControl from 'src/reducers/utils/controls-creator';

const control = createControl('users');

export const { actions } = control;

export default control.reducer;
