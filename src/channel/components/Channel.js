import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function Channel({ channelId }) {
  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  return (
    <Link href={`/c/${channel.name}`}>
      <a>{channel.title}</a>
    </Link>
  );
}

Channel.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default Channel;
