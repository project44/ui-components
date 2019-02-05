import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SubHeader.scss';
import { Row, Col } from 'antd';

export default class SubHeader extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    screenWidth: PropTypes.bool
  }

  render() {
    const { children, screenWidth } = this.props;
    return (
      <header key={screenWidth} className='sub-header'>
        <Row type='flex' align='middle'>
          <Col className='flex flex-grow relative' />
          <Col className='p44-container'>{children}</Col>
          <Col className='flex flex-grow relative' />
        </Row>
      </header>
    );
  }
}
