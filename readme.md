
# stylexswc npm monorepo

Monorepo using npm to install dependencies.

App folder contains a nextjs application using stylex for styling. Uses [stylex in rust](https://github.com/Dwlad90/stylex-swc-plugin) packages to build the application.

## Notes

Install dependencies.

Note that the application folder commits node_modules, this only contains a symlink to the `@stylexjs` folder at `<root>/node_modules/@stylexjs`. This is to patch an error with finding `open-props` within webpack, which masks the postcss path issue uncovered here.