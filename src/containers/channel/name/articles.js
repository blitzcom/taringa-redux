import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Card from 'src/common/card';
import Center from 'src/common/card/center';
import Spinner from 'src/common/spinner';

import ArticlesList from 'src/articles/list';

import selectControl from 'src/selectors/select-control';

function ArticlesContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'feeds', channelId),
  );

  if (control?.status === 'loaded') {
    return <ArticlesList entityId={channelId} />;
  }

  return (
    <Card snap={false}>
      <Center>
        <Spinner />
      </Center>
    </Card>
  );
}

ArticlesContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ArticlesContainer;
