import PropTypes from 'prop-types';

import Background from 'src/atoms/background';
import Padding from 'src/atoms/padding';
import Paper from 'src/atoms/paper';
import Position from 'src/atoms/position';

function About({ background, avatar, children }) {
  return (
    <Paper flat>
      <Background src={background} />

      <Position to="relative">
        <Padding>
          <Position to="absolute" top={-40}>
            {avatar}
          </Position>
          {children}
        </Padding>
      </Position>
    </Paper>
  );
}

About.propTypes = {
  avatar: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default About;
