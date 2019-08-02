import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select as AntSelect } from 'antd';
import './Select.scss';
import styled from 'styled-components';
import { rgba } from 'polished';

import { ThemeContext, defaultThemeShape } from '../../styles/theme';

const StyledSelect = styled.div`
  .ant-select-selection:hover,
  .ant-select-selection:focus {
    border: 1px solid ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 2px ${props => rgba(props.theme.primaryColor, 0.2)};
  }
`;

export default class Select extends Component {
  static propTypes = {
    mode: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    custom: PropTypes.string,
    showSearch: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string,
    theme: PropTypes.shape(defaultThemeShape),
  };
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDropdownChange = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {
      mode = 'default',
      label,
      placeholder,
      custom,
      showSearch,
      defaultValue,
      onChange,
      icon = 'arrow_drop_down',
      ...props
    } = this.props;
    return (
      <StyledSelect theme={this.props.theme || this.context} className="select ant-form-vertical">
        {label && (
          <div className="ant-form-item-label">
            <label title={label}>{label}</label>
          </div>
        )}
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
            {...props}
          >
            {this.props.dataSource.map(item => {
              return <AntSelect.Option key={item.id}>{item.value}</AntSelect.Option>;
            })}
          </AntSelect>
          <div className="select__icon">
            <i className={`material-icons ${this.state.open ? 'open' : 'closed'}`}>{icon}</i>
          </div>
        </div>
      </StyledSelect>
    );
  }
}
