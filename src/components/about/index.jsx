import PropTypes from 'prop-types';

import Background from 'src/components/atoms/background';
import Line from 'src/components/atoms/line';
import Margin, { MarginSize } from 'src/components/margin';
import Padding from 'src/components/padding';
import Position from 'src/components/position';

function About({ background, avatar, children }) {
  return (
    <section>
      <Background src={background} />

      <Line />

      <Position to="relative">
        <Padding>
          <Position to="absolute" top={-65}>
            {avatar}
          </Position>

          <Margin top={MarginSize.Regular} />

          {children}
        </Padding>
      </Position>
    </section>
  );
}

About.propTypes = {
  avatar: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default About;
