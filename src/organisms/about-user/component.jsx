import PropTypes from 'prop-types';

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

export default UserAbout;
