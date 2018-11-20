import React, { Component } from 'react';
import { Menu, Dropdown as AntDropdown, Icon } from 'antd';

export const DropdownItem = (props) => {
  const {
    key,
    value,
    primaryText
  } = props;

  console.log(this);

  return (
    <Menu.Item key={key} value={value}>
      {primaryText}
    </Menu.Item>
  );
}

export class Dropdown extends Component {
    
  renderMenu = () => {
    const { 
      handleChange,
      value,
      dropdownItems
    } = this.props;

    return (
      <Menu
        selectedKeys={[`${value}`]}
        onClick={handleChange}
      >
        {dropdownItems.map((sortField, index) => (
          <Menu.Item key={index} value={index}>{sortField.displayName}</Menu.Item>
        ))}
      </Menu>
    )
  }
  
  render() {
    const { 
      dropdownItems,
      value,
      origin,
      icon = 'arrow_drop_down',
      selectedColor
    } = this.props;
    
    return (
      <AntDropdown 
        overlay={this.renderMenu()}
        trigger={['click']} 
        placement={origin}
      >
        <a 
          className="ant-dropdown-link flex flex-row-reverse items-center" 
          style={{
            color: `var(${selectedColor})`
          }}
          href="#"
        >
          <i className={`material-icons`}>{icon}</i>
          <span>{dropdownItems[value].displayName}</span>
        </a>
      </AntDropdown>
    )
  }
}
