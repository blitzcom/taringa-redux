import createSummaryControl from 'src/reducers/utils/summary-control-creator';

const summaryControl = createSummaryControl('channels');

export const { actions } = summaryControl;

export default summaryControl.reducer;
