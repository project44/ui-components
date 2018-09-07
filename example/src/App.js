import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Foo, Bar } from 'ui-components';

import { Button } from 'antd';

import Header from './components/common/Header';
import SideNav from './components/common/SideNav';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideNav />
      </div>
    )
  }
}
