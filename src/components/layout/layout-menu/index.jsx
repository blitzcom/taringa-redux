import PropTypes from 'prop-types';

import style from './style.module.scss';

function LayoutMenu({ children }) {
  return (
    <nav aria-label="User Navigation" className={style.menu}>
      {children}
    </nav>
  );
}

LayoutMenu.propTypes = {
  children: PropTypes.node,
};

LayoutMenu.defaultProps = {
  children: null,
};

export default LayoutMenu;
