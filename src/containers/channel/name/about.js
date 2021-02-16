import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ChannelAbout from 'src/channel/components/ChannelAbout';

import selectControl from 'src/util/selectors/selectControl';

function AboutContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channel/about', channelId),
  );

  if (control?.status === 'fetched') {
    return <ChannelAbout channelId={channelId} />;
  }

  return <p>Loading...</p>;
}

AboutContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default AboutContainer;
