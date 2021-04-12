import PropTypes from 'prop-types';
import Head from 'next/head';

function LayoutHead({ children }) {
  return (
    <Head>
      <title key="title">Taringa! - Inteligencia Colectiva</title>
      <link key="favicon" rel="icon" href="/favicon.ico" />

      {children}
    </Head>
  );
}

LayoutHead.propTypes = {
  children: PropTypes.node,
};

LayoutHead.defaultProps = {
  children: null,
};

export default LayoutHead;
