import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import Box from 'src/atoms/box';
import Row from 'src/atoms/row';
import Text from 'src/atoms/text';
import Thumbnail from 'src/atoms/thumbnail';
import Title from 'src/atoms/title';

import selectEntity from 'src/selectors/select-entity';

function RowArticle({ itemId }) {
  const article = useSelector((state) => {
    const entity = selectEntity(state, 'stories', itemId);
    const channel = selectEntity(state, 'channels', entity.channel);
    const owner = selectEntity(state, 'users', entity.owner);

    return {
      subtitle: entity.summary.excerpt,
      thumbnail: entity.thumbnail,
      title: entity.title,
      url: `/c/${channel.name}/${entity.slug}`,
      channel: {
        name: channel.title,
        url: `/c/${channel.name}`,
      },
      owner: {
        username: owner.username,
        url: `/u/${owner.username}`,
      },
    };
  });

  return (
    <Row>
      <article>
        <div>
          <Text>
            <Link href={article.channel.url}>
              <a>
                <b>{article.channel.name}</b>
              </a>
            </Link>

            <span> • </span>
            <span>Posted by </span>

            <Link href={article.owner.url}>
              <a>
                <b>{article.owner.username}</b>
              </a>
            </Link>
          </Text>
        </div>

        <Box display="flex" margin="8px 0 0">
          <Box width="100%" padding="0 16px 0 0">
            <Title variant="article">
              <Link href={article.url}>
                <a>{article.title}</a>
              </Link>
            </Title>

            <Box margin="4px 0 0">
              <Text>{article.subtitle}</Text>
            </Box>
          </Box>

          <Thumbnail src={article.thumbnail} />
        </Box>
      </article>
    </Row>
  );
}

RowArticle.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RowArticle;
