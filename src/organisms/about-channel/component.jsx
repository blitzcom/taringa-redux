import PropTypes from 'prop-types';

import AvatarLarge from 'src/atoms/avatar-large';
import Box from 'src/atoms/box';
import Button from 'src/atoms/button';
import Text from 'src/atoms/text';
import Title from 'src/atoms/title';

import About from 'src/molecules/about';

function AboutChannel({ background, category, description, thumbnail, title }) {
  return (
    <About background={background} avatar={<AvatarLarge src={thumbnail} />}>
      <Box display="flex" margin="16px 0 0" justify="space-between">
        <div>
          <Title size="large">{title}</Title>
          <Text variant="secondary">{category}</Text>
        </div>

        <div>
          <Button onClick={() => {}}>Join</Button>
        </div>
      </Box>

      <Box margin="16px 0 0">
        <Text>{description}</Text>
      </Box>
    </About>
  );
}

AboutChannel.propTypes = {
  background: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AboutChannel;
