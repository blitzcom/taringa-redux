import PropTypes from 'prop-types';

import style from './style.module.css';

function Description({ value }) {
  return <p className={style.description}>{value}</p>;
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Description;
