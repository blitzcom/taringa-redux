import PropTypes from 'prop-types';
import React from 'react';

import Markdown from 'src/atoms/markdown';
import Image from 'src/atoms/image';

function Blocks({ blocks }) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'image':
            return (
              <Image
                key={index}
                src={block.url}
                width={block.width}
                height={block.height}
                widthStyle={block.widthStyle}
                paddingStyle={block.paddingStyle}
              />
            );
          case 'markdown':
            return <Markdown key={index}>{block.body}</Markdown>;
          default:
            return null;
        }
      })}
    </div>
  );
}

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Blocks;
