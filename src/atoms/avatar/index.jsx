import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import selectEntity from 'src/selectors/select-entity';

import style from './style.module.css';

function Avatar({ entityId, source }) {
  const user = useSelector((state) => selectEntity(state, source, entityId));

  return (
    <img
      alt={entityId}
      className={style.avatar}
      height={28}
      loading="lazy"
      src={user.avatar}
      width={28}
    />
  );
}

Avatar.propTypes = {
  entityId: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Avatar;
