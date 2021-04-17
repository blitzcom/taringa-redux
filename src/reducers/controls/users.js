import createSummaryControl from 'src/reducers/utils/summary-control-creator';

const summaryControl = createSummaryControl('users');

export const { actions } = summaryControl;

export default summaryControl.reducer;
