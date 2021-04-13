import createEntities from 'src/reducers/utils/entities-creator';

import usersMapper from './mappers/mapper-users';

const entities = createEntities('users', usersMapper);

export const { actions } = entities;

export default entities.reducer;
