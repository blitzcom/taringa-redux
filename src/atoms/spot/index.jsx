import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Spot({ children, initial }) {
  return (
    <div className={classNames(style.spot, { [style.initial]: initial })}>
      {children}
    </div>
  );
}

Spot.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.bool,
};

Spot.defaultProps = {
  initial: false,
};

export default Spot;
