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

  handleDropdownChange = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { mode = 'default', label, placeholder, custom, showSearch, defaultValue, onChange, icon = 'arrow_drop_down'} = this.props;
    return (
      <div className="select ant-form-vertical">
        { label &&
        <div className="ant-form-item-label">
          <label title={label}>{label}</label>
        </div>
        }
        <div className="select__dropdown">
          <AntSelect
            showSearch={showSearch}
            className="select__input"
            showArrow={false}
            onDropdownVisibleChange={this.handleDropdownChange}
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
          <div className="select__icon">
            <i className={`material-icons ${this.state.open ? 'open' : 'closed'}`}>{icon}</i>
          </div>
        </div>
      </div>
    )
  }
};
