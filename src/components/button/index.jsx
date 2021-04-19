import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Button({ children, variant, submit, disabled, onClick }) {
  return (
    <button
      className={classNames(style.button, style[variant])}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success']),
};

Button.defaultProps = {
  disabled: false,
  submit: false,
  variant: 'primary',
};

export default Button;
