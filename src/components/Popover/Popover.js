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
    className: PropTypes.string,
  };

  render() {
    const { content, trigger, title, children, className, placement = 'bottom' } = this.props;
    return (
      <div className={className}>
        <AntPopover content={content} title={title} trigger={trigger} placement={placement}>
          {children}
        </AntPopover>
      </div>
    );
  }
}
