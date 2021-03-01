import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import selectEntity from 'src/selectors/select-entity';

import UserAvatar from './component';

function UserAvatarContainer({ userId }) {
  const user = useSelector((state) => selectEntity(state, 'users', userId));

  return <UserAvatar avatar={user.avatar} username={user.username} />;
}

UserAvatarContainer.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserAvatarContainer;
