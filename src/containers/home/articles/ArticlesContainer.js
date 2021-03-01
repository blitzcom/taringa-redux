import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArticlesList from 'src/articles/list';
import selectControl from 'src/selectors/select-control';

import thunk from './ArticlesContainer.thunk';

function ArticlesContainer() {
  const dispatch = useDispatch();

  const control = useSelector((state) =>
    selectControl(state, 'feeds', 'articles'),
  );

  useEffect(() => {
    dispatch(thunk());
  }, [dispatch]);

  if (control?.status === 'loaded') {
    return <ArticlesList entityId="articles" />;
  }

  return null;
}

export default ArticlesContainer;
