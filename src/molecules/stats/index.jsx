import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function UserStats({ username }) {
  const stats = useSelector((state) => selectEntity(state, 'stats', username));

  if (stats) {
    return (
      <div>
        <span>
          <b>{stats.followers}</b> Seguidores
        </span>
        <span> </span>
        <span>
          <b>{stats.following}</b> Siguiendo
        </span>
        <span> </span>
        <span>
          <b>{stats.stories}</b> Posts
        </span>
        <span> </span>
        <span>
          <b>{stats.suscriptions}</b> Comunidades
        </span>
        <span> </span>
      </div>
    );
  }

  return null;
}

UserStats.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserStats;
