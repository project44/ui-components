import React, { Component } from 'react'

import { Foo, Bar } from 'ui-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <Foo text='Foo Props' />
        <Bar text='Bar Props' />
      </div>
    )
  }
}
