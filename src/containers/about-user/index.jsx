import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import { AvatarSize } from 'src/components/atoms/avatar/constants';
import Avatar from 'src/components/atoms/avatar';

import Line from 'src/components/atoms/line';
import Spinner from 'src/components/atoms/spinner';
import Void from 'src/components/void';

import Stats from 'src/components/stats';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

import AboutUser from 'src/components/about-user';

function UserAboutContainer({ children, username }) {
  const user = useSelector((state) => selectEntity(state, 'users', username));

  const control = useSelector((state) =>
    selectControl(state, 'users', username),
  );

  if (
    control?.status === summaryControlStatus.Upgraded ||
    control?.status === summaryControlStatus.Upgrading
  ) {
    return (
      <>
        <AboutUser
          avatar={
            <Avatar src={user.avatar} size={AvatarSize.ExtraLarge} rounded />
          }
          background={user.background}
          fullname={user.fullname}
          joinedAt={user.joinedAt}
          message={user.message}
          username={user.username}
        >
          <Stats username={user.username} />
        </AboutUser>
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
