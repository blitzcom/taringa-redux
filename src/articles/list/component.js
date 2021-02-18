import PropTypes from 'prop-types';

import Card from 'src/common/card';
import Paper from 'src/common/card/paper';

function ArticlesList({ items, component: Component }) {
  return (
    <Card snap={false}>
      <Paper>
        {items.map((id) => (
          <Component key={id} articleId={id} />
        ))}
      </Paper>
    </Card>
  );
}

ArticlesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.elementType.isRequired,
};

export default ArticlesList;
