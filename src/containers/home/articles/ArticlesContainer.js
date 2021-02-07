import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArticlesList from 'src/articles/components/articles-list';

import thunk from './ArticlesContainer.thunk';

function ArticlesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunk());
  }, [dispatch]);

  return <ArticlesList streamName="containers" entityId="articles" />;
}

export default ArticlesContainer;
