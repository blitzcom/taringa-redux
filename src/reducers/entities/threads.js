import createEntities from 'src/reducers/utils/entities-creator';

const entities = createEntities('threads');

export const { actions } = entities;

export default entities.reducer;
