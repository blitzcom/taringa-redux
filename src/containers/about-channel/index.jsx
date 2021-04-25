import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

import About from 'src/components/about';
import Avatar from 'src/components/avatar';
import Line from 'src/components/line';
import Spinner from 'src/components/spinner';
import Void from 'src/components/void';

import { AvatarSize } from 'src/helpers/css/avatar-size';

import InfoChannel from 'src/containers/info-channel';
import StatsChannel from 'src/containers/stats-channel';

function AboutChannelContainer({ channelId, children }) {
  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  const upgraded = control?.status === summaryControlStatus.Upgraded;

  if (upgraded || control?.status === summaryControlStatus.Upgrading) {
    const thumbnail = (
      <Avatar shadow src={channel.thumbnail} size={AvatarSize.ExtraLarge} />
    );

    return (
      <>
        <About
          background={channel.background}
          bio={channel.description}
          information={upgraded && <InfoChannel channelId={channelId} />}
          stats={upgraded && <StatsChannel channelId={channelId} />}
          thumbnail={thumbnail}
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
