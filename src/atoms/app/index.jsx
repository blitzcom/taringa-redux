import PropTypes from 'prop-types';

import style from './style.module.css';

function App({ children }) {
  return <div className={style.app}>{children}</div>;
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;