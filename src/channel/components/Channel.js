import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getChannel } from 'src/channel/Channel.selectors';

function Channel({ channelId }) {
  const channel = useSelector(getChannel(channelId));

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
