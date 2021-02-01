import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import User from 'src/user/components/User';

import { getArticle } from 'src/article/Article.selectors';
import { getChannel } from 'src/channel/Channel.selectors';

function Article({ articleId }) {
  const article = useSelector(getArticle(articleId));
  const channel = useSelector(getChannel(article.channel));

  return (
    <article>
      <h1>
        <Link href={`/c/${channel.name}/${article.slug}`}>
          <a>{article.title}</a>
        </Link>
      </h1>
      <p>
        <Link href={`/c/${channel.name}`}>
          <a>{channel.title}</a>
        </Link>

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
