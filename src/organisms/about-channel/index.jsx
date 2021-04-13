import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Line from 'src/atoms/line';
import Spinner from 'src/atoms/spinner';
import Void from 'src/atoms/void';

import AboutChannel from './component';

function AboutChannelContainer({ channelId, children }) {
  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  if (control?.status === 'loaded') {
    return (
      <>
        <AboutChannel
          background={channel.background}
          category={channel.category}
          description={channel.description}
          thumbnail={channel.thumbnail}
          title={channel.title}
        />
        <Line />
        {children}
      </>
    );
  }

  return (
    <Void>
      <Spinner />
    </Void>
  );
}

AboutChannelContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

AboutChannelContainer.defaultProps = {
  children: null,
};

export default AboutChannelContainer;
