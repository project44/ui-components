import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import routes from '../routes';

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
          <Link to={'/'}>
            <Icon type='book' />
            <span>About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.colors}>
          <Link to={'/colors'}>
            <Icon type='bg-colors' />
            <span>Colors</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.typography}>
          <Link to={'/typography'}>
            <Icon type='font-size' />
            <span>Typography</span>
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="layout" /><span>Components</span></span>}>
          <Menu.Item key={`${routes.components}${routes.buttons}`}>
            <Link to={'/components/buttons'}>
              Buttons
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.datepicker}`}>
            <Link to={'/components/date-picker'}>
              Date Picker
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.chips}`}>
            <Link to={'/components/chips'}>
              Chips
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.input}`}>
            <Link to={'/components/input'}>
              Input
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.checkbox}`}>
            <Link to={'/components/checkbox'}>
              Checkbox
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.select}`}>
            <Link to={'/components/select'}>
              Select
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.radio}`}>
            <Link to={'/components/radio'}>
              Radio
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.shipmentModeIcon}`}>
            <Link to={'/components/shipment-mode-icon'}>
              Shipment Mode Icon
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.subHeader}`}>
            <Link to={'/components/sub-header'}>
              Sub-Header
            </Link>
          </Menu.Item>
          <Menu.Item key={`${routes.components}${routes.stickyNav}`}>
            <Link to={'/components/sticky-nav'}>
              Sticky Nav
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(SideNav);
