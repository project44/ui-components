import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Foo, Bar } from 'ui-components';

import { Button } from 'antd';

import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import Components from './components/common/Components';
import Landing from './components/Landing';


export default class App extends Component {
  render () {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="p44-ui">
          {/* <Header /> */}
          <SideNav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/components" component={Components} />
        </div>
      </BrowserRouter>
    )
  }
}
