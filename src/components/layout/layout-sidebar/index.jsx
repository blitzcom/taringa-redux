import PropTypes from 'prop-types';

import style from './style.module.scss';

function LayoutSidebar({ children }) {
  return <div className={style.sidebar}>{children}</div>;
}

LayoutSidebar.propTypes = {
  children: PropTypes.node,
};

LayoutSidebar.defaultProps = {
  children: null,
};

export default LayoutSidebar;
