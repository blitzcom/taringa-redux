import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import 'normalize.css';
import 'src/sass/taringa.scss';

import store from 'src/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
