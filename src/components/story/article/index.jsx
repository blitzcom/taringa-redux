import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Article from 'src/molecules/story/article';

function ArticleContainer({ articleId }) {
  const article = useSelector((state) => {
    const entity = selectEntity(state, 'stories', articleId);
    const channel = selectEntity(state, 'channels', entity.channel);
    const owner = selectEntity(state, 'users', entity.owner);

    return {
      subtitle: entity.summary.excerpt,
      thumbnail: entity.thumbnail,
      title: entity.title,
      url: `/c/${channel.name}/${entity.slug}`,
      channel: {
        name: channel.name,
        url: `/c/${channel.name}`,
      },
      owner: {
        username: owner.username,
        url: `/u/${owner.username}`,
      },
    };
  });

  return (
    <Article
      subtitle={article.subtitle}
      thumbnail={article.thumbnail}
      title={article.title}
      channel={article.channel}
      owner={article.owner}
      url={article.url}
    />
  );
}

ArticleContainer.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default ArticleContainer;
