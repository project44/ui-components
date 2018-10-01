import React, { Component } from 'react';
import './SubHeader.scss';
import { Row, Col } from 'antd';

export default class SubHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, screenWidth, overlay } = this.props;
    return (
      <header className="sub-header d-flex align-items-center">
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
        </Row>,
        <div className="col action-line d-none d-sm-flex"></div>
        <div className="container">
          <div className={!overlay ? 'mobile-column d-flex flex-column flex-sm-row align-items-center' : 'mobile-row d-flex flex-sm-row no-gutters' }>
            {children}
          </div>
        </div>
        <div className="col d-none d-sm-flex"></div>
      </header>
    )
  }
};
