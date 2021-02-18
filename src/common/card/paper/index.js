import PropTypes from 'prop-types';

import style from './style.module.css';

function Paper({ children }) {
  return <div className={style.paper}>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
