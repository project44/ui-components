# ui-components

> project44&#x27;s UI Component Library
> https://project44.github.io/ui-components/

[![NPM](https://img.shields.io/npm/v/ui-components.svg)](https://www.npmjs.com/package/ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

We are using GitHub as our registry for the time being, so the correct way to add `ui-components` to your project is using the following syntax:

```bash
yarn add project44/ui-components#0.0.2
```

> Change the version number to support your needs

## Usage

You will need to reference the bundled styles in your application:

```scss
@import '~ui-components/dist/ant.css';
@import '~ui-components/dist/build.css';
```

> Note: the ordering is important! Make sure `build.css` follows `ant.css`.

```jsx
import React, { Component } from 'react';

import { MyComponent } from 'ui-components';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Publishing

When you are ready to publish a new version of ui-components, follow the directions on the site, and and your new version should be published directly to GitHub, and viewable from the [releases](https://github.com/project44/ui-components/releases) page of this repo.

- Run `yarn build` to generate the static assets
- Run `yarn version --patch | --minor | --major | --new-version <version>`
- Run `git push` and `git push --tags`
- Run `yarn deploy` to publish new gh-pages

## Local Development

1. Run `yarn start` to build library in watch mode
1. Run `yarn example:start` to serve example site on http://localhost:4000

[yalc](https://github.com/whitecolor/yalc) can be used to test in a different project.

## Contribution Guidelines

### Code Style

Code style is enforced via prettier and eslint. Prettier and ESLint will automatically run on staged files every commit.

### CSS Styles

Components should use [styled-components](https://www.styled-components.com/docs/basics) for styles. Existing components that still use `.scss` should be moved to use styled-components.

### TypeScript

Currently types are exported in `dist/index.d.ts` and should be updated as needed.

### Adding New Components

1. Create your component in `src/components`
1. Export your component in `src/index.js`
1. Add component typings to `dist/index.d.ts`
1. Add an example of your component
   1. Create example component in `example/src/components/components`
   1. Add a new route for your example component in `example/routes.js`
   1. Add your example component's route to `example/components/common/Components`
   1. Add a link to your example component in `example/components/common/SideNav.js`
