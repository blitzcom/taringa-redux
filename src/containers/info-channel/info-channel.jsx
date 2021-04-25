import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import StatsEmoji from 'src/components/stats-emoji';

function InfoChannel({ channelId }) {
  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  const memoStats = useMemo(
    () => [
      { symbol: '📣', label: 'Category', value: channel.category },
      {
        symbol: '📅',
        label: 'Calendar',
        value: `Creado en ${channel.joinedAt}`,
      },
      { symbol: '👤', label: 'Owner', value: channel.owner },
    ],
    [channel],
  );

  return <StatsEmoji stats={memoStats} />;
}

InfoChannel.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default InfoChannel;
