import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Line from 'src/components/atoms/line';
import Spinner from 'src/components/atoms/spinner';
import Void from 'src/atoms/void';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

import AboutChannel from './component';

function AboutChannelContainer({ channelId, children }) {
  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  if (
    control?.status === summaryControlStatus.Upgraded ||
    control?.status === summaryControlStatus.Upgrading
  ) {
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
