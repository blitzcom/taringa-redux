import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import { AvatarSize } from 'src/atoms/avatar/constants';
import Avatar from 'src/atoms/avatar';

import Line from 'src/atoms/line';
import Spinner from 'src/atoms/spinner';
import Void from 'src/atoms/void';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

import AboutUser from './component';

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
          message={user.message}
          username={user.username}
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
