import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getStats } from 'src/stats/Stats.selectors';

function ChannelStats({ channelId }) {
  const stats = useSelector(getStats(channelId));

  return (
    <div>
      <span>Stories {stats.stories}</span>
      <span> </span>
      <span>Subscribers {stats.subscribers}</span>
    </div>
  );
}

ChannelStats.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ChannelStats;
