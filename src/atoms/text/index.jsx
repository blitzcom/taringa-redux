import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Text({ children, truncate, variant }) {
  return (
    <p
      className={classNames(style.text, style[variant], {
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
};

Text.defaultProps = {
  truncate: false,
  variant: 'primary',
};

export default Text;
