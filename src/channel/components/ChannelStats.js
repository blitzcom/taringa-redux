import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getStats } from 'src/stats/Stats.selectors';

function ChannelStats({ channelId }) {
  const stats = useSelector(getStats(channelId));

  return (
    <div>
      <span>
        stories: <b>{stats.stories}</b>
      </span>
      <span> </span>
      <span>
        subscribers: <b>{stats.subscribers}</b>
      </span>
    </div>
  );
}

ChannelStats.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ChannelStats;
