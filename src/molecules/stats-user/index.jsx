import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function UserStats({ username }) {
  const stats = useSelector((state) => selectEntity(state, 'stats', username));

  if (stats) {
    return (
      <div>
        <span>
          followers: <b>{stats.followers}</b>
        </span>
        <span> </span>
        <span>
          following: <b>{stats.following}</b>
        </span>
        <span> </span>
        <span>
          suscriptions: <b>{stats.suscriptions}</b>
        </span>
        <span> </span>
        <span>
          stories: <b>{stats.stories}</b>
        </span>
        <span> </span>
        <span>
          comments: <b>{stats.comments}</b>
        </span>
      </div>
    );
  }

  return null;
}

UserStats.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserStats;
