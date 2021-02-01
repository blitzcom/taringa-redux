import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getUser } from 'src/user/User.selectors';

function User({ userId }) {
  const user = useSelector(getUser(userId));

  return (
    <Link href={`/u/${user.username}`}>
      <a>
        <b>{user.username}</b>
      </a>
    </Link>
  );
}

User.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default User;
