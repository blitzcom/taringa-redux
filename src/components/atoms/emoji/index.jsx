import PropTypes from 'prop-types';

import style from './style.module.scss';

function Emoji({ symbol, label }) {
  return (
    <span className={style.emoji} role="img" aria-label={label}>
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
