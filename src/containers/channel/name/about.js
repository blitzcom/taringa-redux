import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ChannelAbout from 'src/channel/about';
import ChannelAboutPlaceholder from 'src/channel/about/placeholder';

import selectControl from 'src/selectors/select-control';

function AboutContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  if (control?.status === 'loaded') {
    return <ChannelAbout channelId={channelId} />;
  }

  return <ChannelAboutPlaceholder />;
}

AboutContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default AboutContainer;
