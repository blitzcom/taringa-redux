import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Box from 'src/components/box';
import Clamp from 'src/components/clamp';
import Link from 'src/components/link';
import Row from 'src/components/row';
import StoryActions from 'src/components/story-actions';
import Text from 'src/components/text';
import Thumbnail from 'src/components/thumbnail';

import { TextColor } from 'src/helpers/css/text-color';
import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

export function RowArticle({
  articleSubtitle,
  articleThumbnail,
  articleTitle,
  articleUrl,
  channelName,
  channelUrl,
  children,
  ownerUrl,
  ownerUsername,
}) {
  return (
    <Row>
      <article>
        <Text size={TextSize.Small}>
          <Link href={channelUrl}>
            <b>{channelName}</b>
          </Link>

          <span> • </span>
          <span>Posted by </span>

          <Link href={ownerUrl}>
            <b>{ownerUsername}</b>
          </Link>
        </Text>

        <Box display="flex" margin="8px 0 0">
          <Box width="100%" padding="0 16px 0 0">
            <Text
              element={TextElement.Title}
              leading={TextLeading.Tight}
              size={TextSize.Large}
            >
              <Link href={articleUrl}>{articleTitle}</Link>
            </Text>

            <Box margin="4px 0 0">
              <Clamp>
                <Text
                  element={TextElement.Paragraph}
                  color={TextColor.Secondary}
                  leading={TextLeading.Tight}
                >
                  {articleSubtitle}
                </Text>
              </Clamp>
            </Box>
          </Box>

          <Thumbnail src={articleThumbnail} />
        </Box>
        {children}
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
  children: PropTypes.node,
  ownerUrl: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string.isRequired,
};

RowArticle.defaultProps = {
  children: null,
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

  const stats = useSelector((state) =>
    selectEntity(state, 'stats', article.id),
  );

  return (
    <RowArticle
      articleSubtitle={article.summary.excerpt}
      articleThumbnail={article.thumbnail}
      articleTitle={article.title}
      articleUrl={article.url}
      channelName={channel.title}
      channelUrl={channel.url}
      ownerUrl={owner.url}
      ownerUsername={owner.username}
    >
      <StoryActions
        bookmarks={stats.bookmarks}
        comments={stats.comments}
        downvotes={stats.downvotes}
        shares={stats.shares}
        upvotes={stats.upvotes}
      />
    </RowArticle>
  );
}

RowArticleContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RowArticleContainer;
