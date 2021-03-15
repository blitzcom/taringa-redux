import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function UserAbout({ username }) {
  const user = useSelector((state) => selectEntity(state, 'users', username));

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.message}</p>
    </div>
  );
}

UserAbout.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserAbout;
