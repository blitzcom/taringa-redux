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

import StatsUser from 'src/containers/stats-user';
import InfoUser from 'src/containers/info-user';

import { AvatarSize } from 'src/helpers/css/avatar-size';

function UserAboutContainer({ children, username }) {
  const user = useSelector((state) => selectEntity(state, 'users', username));

  const control = useSelector((state) =>
    selectControl(state, 'users', username),
  );

  const upgraded = control?.status === summaryControlStatus.Upgraded;

  if (upgraded || control?.status === summaryControlStatus.Upgrading) {
    const avatar = (
      <Avatar src={user.avatar} size={AvatarSize.ExtraLarge} rounded shadow />
    );

    return (
      <>
        <About
          background={user.background}
          bio={user.message}
          information={upgraded && <InfoUser username={username} />}
          stats={upgraded && <StatsUser username={username} />}
          subtitle={`@${user.username}`}
          thumbnail={avatar}
          title={user.fullname}
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

UserAboutContainer.propTypes = {
  username: PropTypes.string.isRequired,
  children: PropTypes.node,
};

UserAboutContainer.defaultProps = {
  children: null,
};

export default UserAboutContainer;
