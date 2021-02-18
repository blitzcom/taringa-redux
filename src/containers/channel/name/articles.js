import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Card from 'src/common/card';
import Center from 'src/common/card/center';
import Spinner from 'src/common/spinner';

import ArticlesList from 'src/articles/list';

import selectControl from 'src/util/selectors/selectControl';

function ArticlesContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channel/articles', channelId),
  );

  if (control?.status === 'fetched') {
    return <ArticlesList streamName="containers" entityId={channelId} />;
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
