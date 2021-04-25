import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import usePluralization from 'src/hooks/usePluralization';

import Stats from 'src/components/stats';

function StatsChannel({ channelId }) {
  const pluralize = usePluralization();
  const stats = useSelector((state) => selectEntity(state, 'stats', channelId));

  const memoStats = useMemo(
    () => [
      {
        label: pluralize('posts', stats.stories),
        value: stats.stories,
      },
      {
        label: pluralize('subscriptions', stats.subscribers),
        value: stats.subscribers,
      },
    ],
    [stats, pluralize],
  );

  return <Stats stats={memoStats} />;
}

StatsChannel.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default StatsChannel;
