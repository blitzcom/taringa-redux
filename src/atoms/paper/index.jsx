import PropTypes from 'prop-types';

import style from './style.module.css';

function Paper({ children }) {
  return <section className={style.paper}>{children}</section>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
