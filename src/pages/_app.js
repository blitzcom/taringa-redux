import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import 'src/styles/globals.css';

import store from 'src/store';

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
