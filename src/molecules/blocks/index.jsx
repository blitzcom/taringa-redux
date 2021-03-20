import PropTypes from 'prop-types';
import React from 'react';

import Markdown from 'src/atoms/markdown';
import Image from 'src/atoms/image';

function Blocks({ blocks }) {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case 'image':
            return (
              <Image
                key={block.id}
                src={block.url}
                width={block.width}
                height={block.height}
                widthStyle={block.widthStyle}
                paddingStyle={block.paddingStyle}
              />
            );
          case 'markdown':
            return <Markdown key={block.id}>{block.body}</Markdown>;
          default:
            return null;
        }
      })}
    </div>
  );
}

Blocks.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Blocks;
