import PropTypes from 'prop-types';

import About from 'src/molecules/about';

export function UserAbout({ avatar, background, username, message }) {
  return (
    <About background={background} avatar={avatar}>
      <h1>{username}</h1>
      <p>{message}</p>
    </About>
  );
}

UserAbout.propTypes = {
  avatar: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  message: PropTypes.string,
  username: PropTypes.string.isRequired,
};

UserAbout.defaultProps = {
  message: '',
};

export default UserAbout;
