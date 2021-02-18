import PropTypes from 'prop-types';

import style from './style.module.css';

function Center({ children }) {
  return <div className={style.center}>{children}</div>;
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;
