/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import { memo } from 'react';

import style from './style.module.scss';

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

Markdown.defaultProps = {
  children: '',
};

export default memo(Markdown);
