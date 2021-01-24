import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import '@styles/globals.css';

import store from '@/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
};

export default MyApp;
