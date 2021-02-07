import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getUser } from 'src/user/User.selectors';

import UserAvatar from './component';

function UserAvatarContainer({ userId }) {
  const user = useSelector(getUser(userId));

  return <UserAvatar avatar={user.avatar} username={user.username} />;
}

UserAvatarContainer.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserAvatarContainer;
