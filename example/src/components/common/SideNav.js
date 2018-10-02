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
          <Menu.Item key="2">
            <Link to={'/colors'}>
              <Icon type="bg-colors" />
              <span>Colors</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={'/typography'}>
              <Icon type="font-size" />
              <span>Typography</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="layout" /><span>Components</span></span>}>
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
            <Menu.Item key="9">
              <Link to={'/components/chips'}>
                Chips
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to={'/components/input'}>
                Input
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to={'/components/checkbox'}>
                Checkbox
              </Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link to={'/components/select'}>
                Select
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
    );
  }
}

export default SideNav;
