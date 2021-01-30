import PropTypes from 'prop-types';

function User({ username }) {
  return (
    <span>
      <b>
        <i>{username}</i>
      </b>
    </span>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
};

export default User;
