import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function User({ userId }) {
  const user = useSelector((state) => selectEntity(state, 'users', userId));

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
