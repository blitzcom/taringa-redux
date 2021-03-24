import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

export function UserAbout({ username, message }) {
  return (
    <div>
      <h1>{username}</h1>
      <p>{message}</p>
    </div>
  );
}

UserAbout.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string,
};

UserAbout.defaultProps = {
  message: '',
};

function UserAboutContainer({ username }) {
  const control = useSelector((state) =>
    selectControl(state, 'users', username),
  );

  const user = useSelector((state) => selectEntity(state, 'users', username));

  if (control?.status === 'loaded') {
    return <UserAbout username={user.username} message={user.message} />;
  }

  return null;
}

UserAboutContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserAboutContainer;
