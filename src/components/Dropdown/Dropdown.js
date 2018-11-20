import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown as AntDropdown } from 'antd';

export default class Dropdown extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
    dropdownItems: PropTypes.array,
    selectedColor: PropTypes.string,
    icon: PropTypes.string,
    origin: PropTypes.string
  }

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
    );
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
          className='ant-dropdown-link flex flex-row-reverse items-center'
          style={{
            color: `var(${selectedColor})`
          }}
          href='#'
        >
          <i className={`material-icons`}>{icon}</i>
          <span>{dropdownItems[value].displayName}</span>
        </a>
      </AntDropdown>
    );
  }
}
