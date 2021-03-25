import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function ButtonAction({ count, singular, plural, active }) {
  return (
    <button
      type="button"
      className={classNames(style.button, { [style.active]: active })}
    >
      {count > 0 && <span className={style.counter}>{count}</span>}
      {count === 1 ? singular : plural}
    </button>
  );
}

ButtonAction.propTypes = {
  count: PropTypes.number.isRequired,
  plural: PropTypes.string.isRequired,
  singular: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ButtonAction.defaultProps = {
  active: false,
};

export default ButtonAction;
