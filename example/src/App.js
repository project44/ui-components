import React, { Component } from 'react'

import { Foo, Bar } from 'ui-components';

import { Button } from 'antd';

export default class App extends Component {
  render () {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Foo text='Foo Props' />
        <Bar text='Bar Props' />
      </div>
    )
  }
}
