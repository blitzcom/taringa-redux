import PropTypes from 'prop-types';

import style from './style.module.scss';

function LayoutContent({ children }) {
  return <div className={style.content}>{children}</div>;
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContent;
