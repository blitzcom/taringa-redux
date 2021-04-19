import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function StatsChannel({ channelId }) {
  const stats = useSelector((state) => selectEntity(state, 'stats', channelId));

  return (
    <div>
      <span>Stories {stats.stories}</span>
      <span> </span>
      <span>Subscribers {stats.subscribers}</span>
    </div>
  );
}

StatsChannel.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default StatsChannel;
