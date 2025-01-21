const path = require('node:path');
const stylexPlugin = require('@stylexswc/nextjs-plugin');
const rootDir = __dirname;

module.exports = stylexPlugin({
  // Add any StyleX options here
  rsOptions: {
    aliases: {
      '@/*': [
        path.join(rootDir, '*'),
      ],
    },
    unstable_moduleResolution: {
      type: 'commonJS',
    },
    isDev: process.env.NODE_ENV === 'development',
    genConditionalClasses: true,
    treeshakeCompensation: true,
  },
  extractCSS: false,
})({
  transpilePackages: ['@stylexjs/open-props', '@urban-ui/theme', '@urban-ui/flex', '@urban-ui/text'],
  // Optionally, add any other Next.js config below
});
