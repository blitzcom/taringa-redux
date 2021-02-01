import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Channel from 'src/channel/components/Channel';
import User from 'src/user/components/User';
import StorySlug from 'src/story/components/StorySlug';

import { getArticle } from 'src/article/Article.selectors';

function Article({ articleId }) {
  const article = useSelector(getArticle(articleId));

  return (
    <article>
      <h1>
        <StorySlug storyId={articleId}>{article.title}</StorySlug>
      </h1>
      <p>
        <Channel channelId={article.channel} />

        <span> • </span>
        <span>Posted by </span>

        <User userId={article.owner} />
      </p>
    </article>
  );
}

Article.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default Article;
