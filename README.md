# Portfolio Website

## Main features of this project

- Multi-Page Application (MPA) in React, employing Static Site Generation (SSG) to maximise performance. [Explanation on choice of MPA with SSG over typical single page application (SPA)](https://github.com/benmurphyy/portfolio-website/pull/1)
- Written in typescript [(config)](./tsconfig.json)
- Built with Webpack. See the webpack config files in the [webpack folder](./webpack/) to see details on server and client bundling. The config files are commented to explain important or more complicated config settings.
- Code quality features:
  - Linting of typescript files with ESLint [(config)](./.eslintrc.js)
  - Code formatting with Prettier [(config)](./.prettierrc.js)
  - Linting of Sass files with styelint [(config)](./stylelint.config.js)
  - All of the above code quality tools are set up to run as a pre-commit hook using Husky and lint-staged.
- CSS modules. Only Bootstrap CSS are loaded globally. Implemented using loader configurations in [webpack config file](./webpack/webpack.common.js).
- Code splitting of pages other than homepage. This is implmented in the [routes.tsx](./src/routes.tsx) which handles routing.

## Misc Information

- This website was originally had a typical SPA design. Also using React, built with Webpack, with all other main features being the same, except the core design. Source code for this version of the website can be found [here](https://github.com/benmurphyy/portfolio-website/releases/tag/v1.0). Again, the webpack configuration is thoroughly commented to explain important or more complicated settings.
