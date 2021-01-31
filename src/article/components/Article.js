import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getArticle } from 'article/Article.selectors';
import { getChannel } from 'channel/Channel.selectors';
import { getUser } from 'user/User.selectors';

function Article({ articleId }) {
  const article = useSelector(getArticle(articleId));
  const channel = useSelector(getChannel(article.channel));
  const owner = useSelector(getUser(article.owner));

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

        <Link href={`/u/${owner.username}`}>
          <a>
            <b>{owner.username}</b>
          </a>
        </Link>
      </p>
    </article>
  );
}

Article.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default Article;
