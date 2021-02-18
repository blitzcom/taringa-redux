import PropTypes from 'prop-types';

import style from './style.module.css';

function Card({ children, snap }) {
  return (
    <section className={style.card} data-snap={snap}>
      {children}
    </section>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  snap: PropTypes.bool,
};

Card.defaultProps = {
  snap: true,
};

export default Card;
