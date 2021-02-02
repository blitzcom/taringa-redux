import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getChannel } from 'src/channel/Channel.selectors';

import ChannelStats from './ChannelStats';

function ChannelAbout({ channelId }) {
  const channel = useSelector(getChannel(channelId));

  return (
    <div>
      <h1>{channel.title}</h1>
      <p>{channel.description}</p>
      <ChannelStats channelId={channelId} />
    </div>
  );
}

ChannelAbout.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ChannelAbout;
