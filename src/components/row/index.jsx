import PropTypes from 'prop-types';

import style from './style.module.scss';

function Row({ children }) {
  return <div className={style.row}>{children}</div>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
