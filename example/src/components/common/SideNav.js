import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

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
    return (
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
          <SubMenu key="sub1" title={<span><Icon type="layout" /><span>Components</span></span>}>
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
            <Menu.Item key="7">
              <Link to={'/components/buttons'}>
                Buttons
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to={'/components/date-picker'}>
                Date Picker
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
    );
  }
}

export default SideNav;