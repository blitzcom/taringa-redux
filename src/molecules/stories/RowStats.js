import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function RowStats({ id }) {
  const stats = useSelector((state) => state.objects.stats.entities[id]);

  return (
    <div>
      <span>
        upvotes <b>{stats.upvotes}</b>
      </span>
      <span>
        downvotes <b>{stats.downvotes}</b>
      </span>
      <span>
        comments <b>{stats.comments}</b>
      </span>
      <span>
        bookmarks <b>{stats.bookmarks}</b>
      </span>
      <span>
        shares <b>{stats.shares}</b>
      </span>
    </div>
  );
}

RowStats.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RowStats;
