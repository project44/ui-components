import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover as AntPopover } from 'antd';
import './Popover.scss';

export default class Popover extends Component {
  static propTypes = {
    trigger: PropTypes.string,
    title: PropTypes.string,
    placement: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    customClassName: PropTypes.string,
  };

  render() {
    const { content, trigger, title, children, customClassName, placement = 'bottom' } = this.props;
    return (
      <div className={customClassName}>
        <AntPopover content={content} title={title} trigger={trigger} placement={placement}>
          {children}
        </AntPopover>
      </div>
    );
  }
}
