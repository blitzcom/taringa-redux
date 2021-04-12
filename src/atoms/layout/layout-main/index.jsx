import PropTypes from 'prop-types';

import style from './style.module.scss';

function LayoutMain({ children }) {
  return <main className={style.main}>{children}</main>;
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
