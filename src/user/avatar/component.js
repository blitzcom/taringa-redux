import PropTypes from 'prop-types';

import style from './style.module.css';

function UserAvatar({ avatar, username }) {
  return (
    <img
      alt={username}
      className={style.avatar}
      height={28}
      loading="lazy"
      src={avatar}
      width={28}
    />
  );
}

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserAvatar;
