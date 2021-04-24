import PropTypes from 'prop-types';

import { AvatarSize } from 'src/components/avatar/constants';
import About from 'src/components/about';
import Avatar from 'src/components/avatar';
import Box from 'src/components/box';
import Button from 'src/components/button';
import Text from 'src/components/text';

import { TextElement } from 'src/helpers/css/text-element';
import { TextSize } from 'src/helpers/css/text-size';

function AboutChannel({ background, category, description, thumbnail, title }) {
  return (
    <About
      background={background}
      avatar={<Avatar src={thumbnail} size={AvatarSize.ExtraLarge} />}
    >
      <Box display="flex" margin="16px 0 0" justify="space-between">
        <div>
          <Text element={TextElement.Title} size={TextSize.Large}>
            {title}
          </Text>
          <Text>{category}</Text>
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
