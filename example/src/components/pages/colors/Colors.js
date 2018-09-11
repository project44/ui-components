import React from 'react';

import { Row, Col } from 'antd';

import './Colors.scss'

export default (props) => {
  return (
      <div className="colors">
        <h2>
          Colors
        </h2>
        <Row gutter={8}>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-blue-30)'}}></div>
              <div className="item__var-name">--primary-blue-30</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-blue)'}}></div>
              <div className="item__var-name">--primary-blue</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--off-blue)'}}></div>
              <div className="item__var-name">--off-blue</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--bluish)'}}></div>
              <div className="item__var-name">--bluish</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--chathams-blue)'}}></div>
              <div className="item__var-name">--chathams-blue</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-grey)'}}></div>
              <div className="item__var-name">--primary-grey</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-grey-80)'}}></div>
              <div className="item__var-name">--primary-grey-80</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-grey-40)'}}></div>
              <div className="item__var-name">--primary-grey-40</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-grey-20)'}}></div>
              <div className="item__var-name">--primary-grey-20</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--primary-grey-05)'}}></div>
              <div className="item__var-name">--primary-grey-05</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--mysterious-grey)'}}></div>
              <div className="item__var-name">--mysterious-grey</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--yellow)'}}></div>
              <div className="item__var-name">--yellow</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--orange)'}}></div>
              <div className="item__var-name">--orange</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--green)'}}></div>
              <div className="item__var-name">--green</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--new-fruit)'}}></div>
              <div className="item__var-name">--new-fruit</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--white)'}}></div>
              <div className="item__var-name">--white</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--white-two)'}}></div>
              <div className="item__var-name">--white-two</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="colors__item">
              <div className="item__example" style={{backgroundColor: 'var(--teal)'}}></div>
              <div className="item__var-name">--teal</div>
            </div>
          </Col>
        </Row>
      </div>
  );
}
