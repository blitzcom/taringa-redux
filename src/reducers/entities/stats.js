import createEntities from 'src/reducers/utils/entities-creator';

const entities = createEntities('stats');

export const { actions } = entities;

export default entities.reducer;
