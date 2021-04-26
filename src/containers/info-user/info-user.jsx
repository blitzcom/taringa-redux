import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import StatsEmoji from 'src/components/stats-emoji';

function InfoUser({ username }) {
  const user = useSelector((state) => selectEntity(state, 'users', username));

  const info = useMemo(
    () => [
      { symbol: '🏠', label: 'Home', value: user.country },
      {
        symbol: '📅',
        label: 'Calendar',
        value: `Se unió ${user.displayCreated}`,
      },
    ],
    [user],
  );

  return <StatsEmoji stats={info} />;
}

InfoUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default InfoUser;
