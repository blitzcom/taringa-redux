import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Text({ children, truncate, variant, size }) {
  return (
    <p
      className={classNames(style.text, style[variant], style[size], {
        [style.truncate]: truncate,
      })}
    >
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  truncate: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Text.defaultProps = {
  truncate: false,
  variant: 'primary',
  size: 'medium',
};

export default Text;
