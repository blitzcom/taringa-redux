const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    additionalData: `
      $production: ${process.env.NODE_ENV === 'production'};
    `,
  },
};
