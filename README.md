# Portfolio Website

## Main features of this project

- Written in typescript [(config)](./tsconfig.json)
- Bundling with Webpack. See the main [webpack config file](./webpack/webpack.common.js) for commented config explaining the functions of the different carefully chosen webpack loaders, plugins and webpack settings used in this project.
- Code quality features:
  - Linting of typescript files with ESLint [(config)](./.eslintrc.js)
  - Code formatting with Prettier [(config)](./.prettierrc.js)
  - Linting of Sass files with styelint [(config)](./stylelint.config.js)
  - All of the above code quality tools are set up to run as a pre-commit hook using Husky and lint-staged.
- CSS modules. Only Bootstrap CSS are loaded globally. Implemented using loader configurations in [webpack config file](./webpack/webpack.common.js).
- Code splitting of pages other than homepage. This is implmented in the [routes.tsx](./src/routes.tsx) which handles routing. Prefetching is set up so that the other pages can be loaded when idling on the homepage, so they will load faster on navigation.

## Other information

- Webpack has been configured to allow preloading of jpg, png, jpeg, svg, ttf and woff files using PreloadWebpackPlugin.
  - This allows images and fonts to be preloaded easily, so their loading is not delayed until the javascript bundle file is processed.
  - To preload one of these files on a page, when importing the file, add the resource query "?preload" to the end of the file import path.
    - e.g. "src/assets/images/background.jpg" => "src/assets/images/background.jpg?preload"
  - IMPORTANT: Only assets that are used on the homepage or on all pages should be preloaded. As given this is a single-page application (SPA), with only one source index html file where preloaded assets are injected, it is not possible to dynamically preload assets (such that they would be downloaded before the javascript bundle). Thus if any assets in other pages other than homepage have the resource query "?preload", those assets will be preloaded on the homepage, even if they were not needed on the homepage, slowing down the load time of the homepage.
