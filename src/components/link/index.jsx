import PropTypes from 'prop-types';
import NextLink from 'next/link';

import style from './style.module.scss';

function Link({ children, href }) {
  return (
    <NextLink href={href}>
      <a className={style.link}>{children}</a>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
