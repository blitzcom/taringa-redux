import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import usePluralization from 'src/hooks/usePluralization';

import Stats from 'src/components/stats';

function StatsUser({ username }) {
  const pluralize = usePluralization();
  const stats = useSelector((state) => selectEntity(state, 'stats', username));

  const memoStats = useMemo(
    () => [
      {
        label: pluralize('followers', stats.followers),
        value: stats.followers,
      },
      {
        label: pluralize('following', stats.following),
        value: stats.following,
      },
      {
        label: pluralize('posts', stats.stories),
        value: stats.stories,
      },
      {
        label: pluralize('communities', stats.suscriptions),
        value: stats.suscriptions,
      },
    ],
    [stats, pluralize],
  );

  return <Stats stats={memoStats} />;
}

StatsUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default StatsUser;
