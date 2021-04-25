import PropTypes from 'prop-types';

import Background from 'src/components/background';
import Button from 'src/components/button';
import Line from 'src/components/line';
import Text from 'src/components/text';

import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

import style from './about.module.scss';

function AboutChannel({
  background,
  bio,
  information,
  stats,
  subtitle,
  thumbnail,
  title,
}) {
  return (
    <section>
      <Background src={background} />

      <Line />

      <div className={style.content}>
        <div className={style.thumbnail}>{thumbnail}</div>

        <div className={style.details}>
          <div>
            <Text element={TextElement.Title} size={TextSize.ExtraLarge}>
              {title}
            </Text>

            {subtitle && <Text className={style.subtitle}>{subtitle}</Text>}

            <div className={style.information}>{information}</div>
          </div>

          <div>
            <Button onClick={() => {}}>Join</Button>
          </div>
        </div>

        {bio && stats && (
          <div className={style.bio}>
            <Text leading={TextLeading.Snug}>{bio}</Text>
          </div>
        )}

        {stats}
      </div>
    </section>
  );
}

AboutChannel.propTypes = {
  background: PropTypes.string.isRequired,
  bio: PropTypes.string,
  information: PropTypes.node.isRequired,
  stats: PropTypes.node,
  subtitle: PropTypes.string,
  thumbnail: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

AboutChannel.defaultProps = {
  bio: '',
  stats: null,
  subtitle: '',
};

export default AboutChannel;
