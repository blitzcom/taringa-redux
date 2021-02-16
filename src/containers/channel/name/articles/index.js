import { useSelector } from 'react-redux';

import ArticlesList from 'src/articles/components/articles-list';

import { getControl } from './selectors';

function ArticlesContainer() {
  const control = useSelector(getControl());

  if (control.status === 'fetching' || control.status === 'cancel') {
    return <p>Loading...</p>;
  }

  return <ArticlesList streamName="containers" entityId="channel-articles" />;
}

export default ArticlesContainer;
