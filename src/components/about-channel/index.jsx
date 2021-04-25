import PropTypes from 'prop-types';

import About from 'src/components/about';
import Avatar from 'src/components/avatar';
import Button from 'src/components/button';
import Text from 'src/components/text';

import { AvatarSize } from 'src/helpers/css/avatar-size';
import { TextElement } from 'src/helpers/css/text-element';
import { TextSize } from 'src/helpers/css/text-size';

import style from './about-channel.module.scss';

function AboutChannel({ background, category, description, thumbnail, title }) {
  return (
    <About
      background={background}
      avatar={<Avatar shadow src={thumbnail} size={AvatarSize.ExtraLarge} />}
    >
      <div className={style.information}>
        <div>
          <Text element={TextElement.Title} size={TextSize.Large}>
            {title}
          </Text>
          <Text>{category}</Text>
        </div>

        <div>
          <Button onClick={() => {}}>Join</Button>
        </div>
      </div>

      <div className={style.description}>
        <Text>{description}</Text>
      </div>
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
