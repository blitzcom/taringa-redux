import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Emoji({ className, symbol, label }) {
  return (
    <span
      className={classNames(className, style.emoji)}
      role="img"
      aria-label={label}
    >
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

Emoji.defaultProps = {
  className: null,
};

export default Emoji;
