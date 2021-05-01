import createEntities from 'src/reducers/utils/entities-creator';

import commentsMapper from './mappers/mapper-comments';

const entities = createEntities('comments', commentsMapper);

export const { actions } = entities;

export default entities.reducer;
