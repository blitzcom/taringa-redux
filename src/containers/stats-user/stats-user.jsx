import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Stats from 'src/components/stats';

function StatsUser({ username }) {
  const stats = useSelector((state) => selectEntity(state, 'stats', username));

  const memoStats = useMemo(
    () => [
      { label: 'Seguidores', value: stats.followers },
      { label: 'Siguiendo', value: stats.following },
      { label: 'Posts', value: stats.stories },
      { label: 'Comunidades', value: stats.suscriptions },
    ],
    [stats],
  );

  return <Stats stats={memoStats} />;
}

StatsUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default StatsUser;
