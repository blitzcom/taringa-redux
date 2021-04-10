import createSummaryControl from 'src/reducers/utils/summary-control-creator';

const summaryControl = createSummaryControl('stories');

export const { actions } = summaryControl;

export default summaryControl.reducer;
