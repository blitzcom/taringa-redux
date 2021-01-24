import PropTypes from 'prop-types';

function Markdown({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
}

Markdown.propTypes = {
  children: PropTypes.string,
};

export default Markdown;
