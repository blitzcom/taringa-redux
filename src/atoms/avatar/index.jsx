import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import style from './style.module.scss';

export function Avatar({ src }) {
  return (
    <img
      alt=""
      className={style.avatar}
      height={28}
      loading="lazy"
      src={src}
      width={28}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

function AvatarContainer({ entityId, source }) {
  const user = useSelector((state) => selectEntity(state, source, entityId));
  return <Avatar src={user.avatar} />;
}

AvatarContainer.propTypes = {
  entityId: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default AvatarContainer;
