import PropTypes from 'prop-types';
import Link from 'next/link';

import Box from 'src/atoms/box';
import Row from 'src/atoms/row';
import Text from 'src/atoms/text';
import Thumbnail from 'src/atoms/thumbnail';
import Title from 'src/atoms/title';

function Article({ channel, owner, subtitle, thumbnail, title, url }) {
  return (
    <Row>
      <article>
        <div>
          <Text>
            <Link href={channel.url}>
              <a>
                <b>{channel.name}</b>
              </a>
            </Link>

            <span> • </span>
            <span>Posted by </span>

            <Link href={owner.url}>
              <a>
                <b>{owner.username}</b>
              </a>
            </Link>
          </Text>
        </div>

        <Box display="flex" margin="8px 0 0">
          <Box width="100%" padding="0 16px 0 0">
            <Title variant="article">
              <Link href={url}>
                <a>{title}</a>
              </Link>
            </Title>

            <Box margin="4px 0 0">
              <Text>{subtitle}</Text>
            </Box>
          </Box>

          <Thumbnail src={thumbnail} />
        </Box>
      </article>
    </Row>
  );
}

Article.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  owner: PropTypes.shape({
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  subtitle: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Article.defaultProps = {
  thumbnail: '/article_background.svg',
};

export default Article;
