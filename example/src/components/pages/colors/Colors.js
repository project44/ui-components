import React from 'react';

import { Row, Col } from 'antd';

import './Colors.scss'

export default (props) => {
  return (
    <div className="p44-ui__page">
      <div className="page-header">
        <h1>Colors</h1>
      </div>
      <div className="page-content">
        <p className="page-intro">
          If you hadn’t noticed, we like blue. We also like to keep it simple.
          The use of color throughout our application is minimal and intentional.
          Specifically reserving color for the most crucial data points for fast
          consumption and indication of status.
        </p>

        <section className="page-section">
          <h2 className="section-title">project44 Blues</h2>
          <p>Our brand blue should be used sparingly within the application. Specifically for primary actions and accents.</p>

          <p>The following colors have specific purpose within the shipment tracking application.</p>

          <p><strong>Chathams-Blue</strong></p>
        	<ul>
            <li>Backgrounds</li>
          </ul>

          <p><strong>p44-Blue</strong></p>
          <ul>
            <li>Primary Actions and Button fills</li>
            <li>Hyperlinks</li>
            <li>Highlights and Accents</li>
          </ul>

          <p><strong>Blue-75</strong></p>
          <ul>
            <li>On-Time Status</li>
          </ul>

          <p>All blues may be used for illustrations or to create dimension.</p>

          <Row gutter={8} className="colors">
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--chathams-blue)'}}></div>
                <div className="item__var-name">
                  <p>--chathams-blue</p>
                  <p>#11426a</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--p44-blue)'}}></div>
                <div className="item__var-name">
                  <p>--p44-blue</p>
                  <p>#236192</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue</p>
                  <p>#236192</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue-95)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue-95</p>
                  <p>#2E6998</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue-75)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue-75</p>
                  <p>#5A89AE</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue-45)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue-45</p>
                  <p>#9CB8CE</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue-30)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue-30</p>
                  <p>#BDD0DF</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-blue-13)'}}></div>
                <div className="item__var-name">
                  <p>--primary-blue-13</p>
                  <p>#E3EBF1</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="page-section">
          <h2 className="section-title">Grays</h2>
          <p>Our grays can be used on most UI components but should be limited to:</p>
          <ul>
            <li>Backgrounds</li>
            <li>Borders</li>
            <li>Text</li>
            <li>SVG fills</li>
            <li>Button fills</li>
          </ul>
          <Row gutter={8} className="colors">
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-grey)'}}></div>
                <div className="item__var-name">
                  <p>--primary-grey</p>
                  <p>#2D2926</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={8} className="colors">
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-grey-80)'}}></div>
                <div className="item__var-name">
                  <p>--primary-grey-80</p>
                  <p>#575451</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-grey-40)'}}></div>
                <div className="item__var-name">
                  <p>--primary-grey-40</p>
                  <p>#aba9a8</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-grey-20)'}}></div>
                <div className="item__var-name">
                  <p>--primary-grey-20</p>
                  <p>#D5D4D4</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--primary-grey-05)'}}></div>
                <div className="item__var-name">
                  <p>--primary-grey-05</p>
                  <p>#f3f3f3</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="page-section">
          <h2 className="section-title">Accents</h2>
          <p>Teal:</p>
          <ul>
            <li>Hyperlinks</li>
          </ul>
          <p>Orange and  Yellow are rarely used in the UI but are provided for accent and illustration purposes.</p>
          <Row gutter={8} className="colors">
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--teal)'}}></div>
                <div className="item__var-name">
                  <p>--teal</p>
                  <p>#2091A9</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--orange)'}}></div>
                <div className="item__var-name">
                  <p>--orange</p>
                  <p>#ea8616</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--yellow)'}}></div>
                <div className="item__var-name">
                  <p>--yellow</p>
                  <p>#f6c472</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="page-section">
          <h2 className="section-title">Alerts</h2>
          <p><strong>Green</strong></p>
          <ul>
            <li>
              Success or Early status
            </li>
          </ul>
          <p><strong>New-Fruit</strong></p>
          <ul>
            <li>
              Error or late status
            </li>
          </ul>

          <Row gutter={8} className="colors">
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--green)'}}></div>
                <div className="item__var-name">
                  <p>--green</p>
                  <p>#1e9f5b</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="colors__item">
                <div className="item__example" style={{backgroundColor: 'var(--new-fruit)'}}></div>
                <div className="item__var-name">
                  <p>--new-fruit</p>
                  <p>#f55449</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
}
