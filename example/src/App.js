import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import SideNav from './components/common/SideNav';
import Components from './components/common/Components';
import Landing from './components/Landing';
import Colors from './components/pages/colors/Colors';
import Typography from './components/pages/typography/Typography';

import routes from './routes';

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
    let logoClassNames = this.state.collapsed ? 'sm' : '';
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
              <Link to={routes.about}>
                <img className={logoClassNames} src={logoImage} alt="p44 logo" />
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
              <a href="https://github.com/project44/ui-components">
                <Icon
                  type="github"
                  theme="outlined"
                  className="header__github"
                />
              </a>
            </Header>
            <Content className="p44-ui__wrapper">
              <Switch>
                <Route exact path={routes.about} component={Landing} />
                <Route exact path={routes.colors} component={Colors} />
                <Route exact path={routes.typography} component={Typography} />
                <Route path={routes.components} component={Components} />
                <Redirect to={routes.about} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
