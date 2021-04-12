import PropTypes from 'prop-types';

import style from './style.module.scss';

function LayoutApp({ children }) {
  return <div className={style.app}>{children}</div>;
}

LayoutApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutApp;
