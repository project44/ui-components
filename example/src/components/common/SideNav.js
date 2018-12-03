import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import routes from '../../routes';

const SubMenu = Menu.SubMenu;

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
        defaultSelectedKeys={[this.props.location.pathname]}
        defaultOpenKeys={['sub1']}
        mode='inline'
        // theme='dark'
        inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item key={routes.about}>
          <Link to={routes.about}>
            <Icon type='book' />
            <span>About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.colors}>
          <Link to={routes.colors}>
            <Icon type='bg-colors' />
            <span>Colors</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.typography}>
          <Link to={routes.typography}>
            <Icon type='font-size' />
            <span>Typography</span>
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="layout" /><span>Components</span></span>}>
          <Menu.Item key={`${routes.components}${routes.buttons}`}>
            <Link to={`${routes.components}${routes.buttons}`}>
              Buttons
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.datepicker}`}>
            <Link to={`${routes.components}${routes.datepicker}`}>
              Date Picker
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.chips}`}>
            <Link to={`${routes.components}${routes.chips}`}>
              Chips
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.input}`}>
            <Link to={`${routes.components}${routes.input}`}>
              Input
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.checkbox}`}>
            <Link to={`${routes.components}${routes.checkbox}`}>
              Checkbox
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.select}`}>
            <Link to={`${routes.components}${routes.select}`}>
              Select
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.radio}`}>
            <Link to={`${routes.components}${routes.radio}`}>
              Radio
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.shipmentModeIcon}`}>
            <Link to={`${routes.components}${routes.shipmentModeIcon}`}>
              Shipment Mode Icon
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.subHeader}`}>
            <Link to={`${routes.components}${routes.subHeader}`}>
              Sub-Header
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.stickyNav}`}>
            <Link to={`${routes.components}${routes.stickyNav}`}>
              Sticky Nav
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(SideNav);
