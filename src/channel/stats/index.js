import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function ChannelStats({ channelId }) {
  const stats = useSelector((state) => selectEntity(state, 'stats', channelId));

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
