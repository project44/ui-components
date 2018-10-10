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
    screenWidth: PropTypes.bool,
    overlay: PropTypes.bool
  }

  render() {
    const { children, screenWidth, overlay } = this.props;
    return (
      <header key={screenWidth} className='sub-header d-flex align-items-center'>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
        </Row>
        <div className='col action-line d-none d-sm-flex' />
        <div className='container'>
          <div className={!overlay ? 'mobile-column d-flex flex-column flex-sm-row align-items-center' : 'mobile-row d-flex flex-sm-row no-gutters'}>
            {children}
          </div>
        </div>
        <div className='col d-none d-sm-flex' />
      </header>
    );
  }
};
