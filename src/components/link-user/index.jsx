import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function LinkUser({ username }) {
  const user = useSelector((state) => selectEntity(state, 'users', username));

  return (
    <Link href={`/u/${user.username}`}>
      <a>
        <b>{user.username}</b>
      </a>
    </Link>
  );
}

LinkUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default LinkUser;
