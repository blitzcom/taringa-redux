import PropTypes from 'prop-types';

import style from './style.module.css';

function Content({ children }) {
  return <div className={style.content}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
