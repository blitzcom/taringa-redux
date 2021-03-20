import createEntities from 'src/reducers/utils/entities-creator';

const entities = createEntities('states');

export const { actions } = entities;

export default entities.reducer;
