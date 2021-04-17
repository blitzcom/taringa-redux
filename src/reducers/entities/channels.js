import createEntities from 'src/reducers/utils/entities-creator';

import channelsMapper from './mappers/mapper-channels';

const entities = createEntities('channels', channelsMapper);

export const { actions } = entities;

export default entities.reducer;
