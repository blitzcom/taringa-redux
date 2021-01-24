import PropTypes from 'prop-types';
import React from 'react';

import Markdown from '@atoms/Markdown';
import Image from '@atoms/Image';

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
