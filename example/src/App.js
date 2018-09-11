import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AppHeader from './components/common/Header';
import SideNav from './components/common/SideNav';
import Components from './components/common/Components';
import Landing from './components/Landing';
import Colors from './components/pages/colors/Colors';
import Typography from './components/pages/typography/Typography';

import logoImg from './assets/images/logo.svg';
import logoImgSm from './assets/images/logo-small.svg';

import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render () {
    let logoImage = this.state.collapsed ? logoImgSm : logoImg;
    let logoClassNames = this.state.collapsed ? 'sm' : ''
    return (
      <BrowserRouter  basename="/ui-components">
        <Layout className="p44-ui">
          <Sider
            style={{ background: '#fff' }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={`logo`}>
              <Link to={'/'}>
                <img className={logoClassNames} src={logoImage} />
              </Link>
            </div>
            <SideNav />
          </Sider>
          <Layout>
            <Header className="p44-ui__header" style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="header__trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              {/* <AppHeader /> */}
            </Header>
            <Content className="p44-ui__content">
              <Route exact path="/" component={Landing} />
              <Route exact path="/colors" component={Colors} />
              <Route exact path="/colors" component={Typography} />
              <Route path="/components" component={Components} />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
