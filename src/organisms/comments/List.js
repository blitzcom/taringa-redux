import PropTypes from 'prop-types';

import Comment from '@molecules/Comment';

function List({ items }) {
  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {items.map((id) => (
          <Comment key={id} commentId={id} />
        ))}
      </ul>
    </section>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
