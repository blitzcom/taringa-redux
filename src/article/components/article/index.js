import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Channel from 'src/channel/components/Channel';
import User from 'src/user/components/User';
import StorySlug from 'src/story/components/StorySlug';

import Article from './component';

function ArticleContainer({ articleId }) {
  const article = useSelector((state) =>
    selectEntity(state, 'stories', articleId),
  );

  return (
    <Article
      title={<StorySlug storyId={articleId}>{article.title}</StorySlug>}
      subtitle={article.summary.excerpt}
      thumbnail={article.thumbnail}
      meta={
        <Fragment>
          <Channel channelId={article.channel} />

          <span> • </span>
          <span>Posted by </span>

          <User userId={article.owner} />
        </Fragment>
      }
    />
  );
}

ArticleContainer.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default ArticleContainer;
