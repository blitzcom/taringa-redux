import PropTypes from 'prop-types';
import NextLink from 'next/link';

function Link({ children, href }) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
