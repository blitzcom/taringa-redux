import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Feed from 'src/organisms/feed';
import Article from 'src/components/article';

import thunk from './ArticlesContainer.thunk';

function ArticlesContainer() {
  const dispatch = useDispatch();

  const control = useSelector((state) =>
    selectControl(state, 'feeds', 'articles'),
  );

  const feed = useSelector((state) => selectEntity(state, 'feeds', 'articles'));

  useEffect(() => {
    dispatch(thunk());
  }, [dispatch]);

  return <Feed Component={Article} control={control} feed={feed} />;
}

export default ArticlesContainer;
