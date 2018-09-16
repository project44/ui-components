import React, { Component } from 'react';
import { Select as AntSelect } from 'antd';
import _ from 'lodash';
import './Select.scss';

export default class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: _.get(props, 'dataSource', [])
    };
  }

  render() {
    const { mode = 'default', value, label, placeholder, custom, defaultValue, onChange} = this.props;
    return (
      <div className="select ant-form-vertical">
        { label &&
        <div className="ant-form-item-label">
          <label title={label}>{label}</label>
        </div>
        }
        <AntSelect
          className="select__input"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          mode={mode}
          {...custom}
        >
          { this.state.options.map((item) => {
            return <AntSelect.Option key={item}>{item}</AntSelect.Option>
          })}

        </AntSelect>
      </div>
    )
  }
};
