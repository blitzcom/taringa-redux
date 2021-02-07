import PropTypes from 'prop-types';
import { memo } from 'react';

import style from './style.module.css';

function Markdown({ children }) {
  return (
    <div
      className={style.markdown}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

Markdown.propTypes = {
  children: PropTypes.string,
};

export default memo(Markdown);
