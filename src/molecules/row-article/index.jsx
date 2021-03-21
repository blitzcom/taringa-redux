import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Box from 'src/atoms/box';
import Link from 'src/atoms/link';
import Row from 'src/atoms/row';
import Text from 'src/atoms/text';
import Thumbnail from 'src/atoms/thumbnail';
import Title from 'src/atoms/title';
import Clamp from 'src/atoms/clamp';

export function RowArticle({
  articleSubtitle,
  articleThumbnail,
  articleTitle,
  articleUrl,
  channelName,
  channelUrl,
  ownerUrl,
  ownerUsername,
}) {
  return (
    <Row>
      <article>
        <div>
          <Text>
            <Link href={channelUrl}>
              <b>{channelName}</b>
            </Link>

            <span> • </span>
            <span>Posted by </span>

            <Link href={ownerUrl}>
              <b>{ownerUsername}</b>
            </Link>
          </Text>
        </div>

        <Box display="flex" margin="8px 0 0">
          <Box width="100%" padding="0 16px 0 0">
            <Title variant="row">
              <Link href={articleUrl}>{articleTitle}</Link>
            </Title>

            <Box margin="4px 0 0">
              <Text>
                <Clamp>{articleSubtitle}</Clamp>
              </Text>
            </Box>
          </Box>

          <Thumbnail src={articleThumbnail} />
        </Box>
      </article>
    </Row>
  );
}

RowArticle.propTypes = {
  articleSubtitle: PropTypes.string.isRequired,
  articleThumbnail: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  channelUrl: PropTypes.string.isRequired,
  ownerUrl: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string.isRequired,
};

function RowArticleContainer({ itemId }) {
  const article = useSelector((state) =>
    selectEntity(state, 'stories', itemId),
  );

  const channel = useSelector((state) =>
    selectEntity(state, 'channels', article.channel),
  );

  const owner = useSelector((state) =>
    selectEntity(state, 'users', article.owner),
  );

  return (
    <RowArticle
      articleSubtitle={article.summary.excerpt}
      articleThumbnail={article.thumbnail}
      articleTitle={article.title}
      articleUrl={article.url}
      channelName={channel.name}
      channelUrl={channel.url}
      ownerUrl={owner.url}
      ownerUsername={owner.username}
    />
  );
}

RowArticleContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RowArticleContainer;
