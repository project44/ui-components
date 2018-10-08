# ui-components

> project44&#x27;s UI Component Library

[![NPM](https://img.shields.io/npm/v/ui-components.svg)](https://www.npmjs.com/package/ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

We are using GitHub as our registry for the time being, so the correct way to add `ui-components` to your project is using the following syntax:

```bash
yarn add project44/ui-components#0.0.2
```
> Change the version number to support your needs

## Usage

```jsx
import React, { Component } from 'react'

import { MyComponent } from 'ui-components'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Publishing

When you are ready to publish a new version of ui-components, we recommend the [np](https://github.com/sindresorhus/np) package.  Follow the directions on the site, and and your new version should be published directly to GitHub, and viewable from the [releases](https://github.com/project44/ui-components/releases) page of this repo.

- [ ] make sure you have `np` installed `npm install --global np`
- [ ] run `yarn build` to generate the static assets
- [ ] run `np <version>` or `yarn publish`
  - Version can be: `patch | minor | major | prepatch | preminor | premajor | prerelease | 1.2.3`

## License

MIT © [robabby](https://github.com/robabby)
