import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getUser } from 'src/user/User.selectors';

import UserStats from './UserStats';

function UserAbout({ userId }) {
  const user = useSelector(getUser(userId));

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.message}</p>
      <UserStats userId={userId} />
    </div>
  );
}

UserAbout.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserAbout;
