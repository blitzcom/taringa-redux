import createEntities from 'src/reducers/utils/entities-creator';

const entities = createEntities('comments');

export const { actions } = entities;

export default entities.reducer;
