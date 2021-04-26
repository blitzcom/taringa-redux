import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Link from 'src/components/link';
import Row from 'src/components/row';
import StoryActions from 'src/components/story-actions';
import Text from 'src/components/text';
import Thumbnail from 'src/components/thumbnail';

import { TextColor } from 'src/helpers/css/text-color';
import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

import style from './row-article.module.scss';

export function RowArticle({
  articleSubtitle,
  articleThumbnail,
  articleTitle,
  articleUrl,
  channelName,
  channelUrl,
  children,
  createdAt,
  ownerUrl,
  ownerUsername,
}) {
  return (
    <Row>
      <article>
        <Text size={TextSize.Small}>
          {channelUrl && (
            <>
              <Link href={channelUrl}>
                <b>{channelName}</b>
              </Link>

              <span> • </span>
            </>
          )}
          <span>Por </span>

          <Link href={ownerUrl}>
            <b>{ownerUsername}</b>
          </Link>

          <span> </span>

          <Text
            element={TextElement.Inline}
            color={TextColor.Muted}
            size={TextSize.Small}
          >
            {createdAt}
          </Text>
        </Text>

        <div className={style.information}>
          <div className={style.details}>
            <Text
              element={TextElement.Title}
              leading={TextLeading.Tight}
              size={TextSize.Large}
            >
              <Link href={articleUrl}>{articleTitle}</Link>
            </Text>

            <div className={style.subtitle}>
              <Text
                element={TextElement.Paragraph}
                color={TextColor.Secondary}
                leading={TextLeading.Tight}
              >
                {articleSubtitle}
              </Text>
            </div>
          </div>

          <Thumbnail src={articleThumbnail} />
        </div>
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
  channelUrl: PropTypes.string,
  children: PropTypes.node,
  createdAt: PropTypes.string.isRequired,
  ownerUrl: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string.isRequired,
};

RowArticle.defaultProps = {
  children: null,
  channelUrl: null,
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
      createdAt={article.displayCreated}
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
