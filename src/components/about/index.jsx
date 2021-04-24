import PropTypes from 'prop-types';

import Background from 'src/components/background';
import Line from 'src/components/line';

import style from './about.module.scss';

function About({ background, avatar, children }) {
  return (
    <section>
      <Background src={background} />

      <Line />

      <div className={style.details}>
        <div className={style.avatar}>{avatar}</div>

        {children}
      </div>
    </section>
  );
}

About.propTypes = {
  avatar: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default About;
