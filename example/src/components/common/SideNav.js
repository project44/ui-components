import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

import logoImg from '../../assets/images/logo.svg';

const SubMenu = Menu.SubMenu;
const MenuGroup = Menu.ItemGroup;

class SideNav extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="SideNav">
        <div key="logo" className="p44-ui__logo">
          <Link to={'/'}>
            <img src={logoImg} />
          </Link>
        </div>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          // theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link to={'/'}>
              <Icon type="book" />
              <span>About</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Components</span></span>}>
            <Menu.Item key="5">
              <Link to={'/components/foo'}>
                Foo
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to={'/components/bar'}>
                Bar
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideNav;
