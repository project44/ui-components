import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

// import { Foo, Bar } from 'ui-components';

// import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import Components from './components/common/Components';
import ComponentShell from './components/common/ComponentShell';
import Landing from './components/Landing';


class App extends Component {
  render () {
    console.log(this.props);
    return (
      <BrowserRouter  basename="/ui-components">
        <div className="p44-ui">
          {/* <Header /> */}
          <SideNav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/components/foo" component={ComponentShell} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
