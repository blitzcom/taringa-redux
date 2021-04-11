import createEntities from 'src/reducers/utils/entities-creator';

import storiesMapper from './mappers/mapper-stories';

const entities = createEntities('stories', storiesMapper);

export const { actions } = entities;

export default entities.reducer;
