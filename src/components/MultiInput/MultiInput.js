import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Tag } from 'antd';

import colors from '../../styles/colors';

const StyledMultiInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: text;
  font-size: 14px;
  height: 36px;
  overflow-y: auto;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 0;
  padding-bottom: 4px;
  &.focused {
    border-color: #3f789e;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(35, 97, 146, 0.2);
    border-right-width: 1px !important;
  }
`;

const Placeholder = styled.div`
  color: ${colors.secondaryTextColor};
  opacity: 0.5;
  pointer-events: none;
  margin-top: 4px;
  height: 22px;
  &.focused {
    display: none;
  }
`;

const StyledTag = styled(Tag)`
  cursor: default;
  margin-top: 4px;
  height: 22px;
  &:hover {
    opacity: 1 !important;
  }
`;

const Input = styled.input`
  outline: none;
  border: 0 none;
  flex: 1;
  width: auto;
  margin-top: 4px;
  height: 22px;
`;

class MultiInput extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    validator: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      inputValue: '',
      values: [],
    };
    this.inputRef = React.createRef();
  }

  onSubmitValue = () => {
    if (
      (this.props.validator && !this.props.validator(this.state.inputValue)) ||
      this.state.values.indexOf(this.state.inputValue) > -1
    ) {
      return;
    }
    const newValues = [...this.state.values, this.state.inputValue.trim()];
    this.setState({
      inputValue: '',
      values: newValues,
    });
    if (this.props.onChange) {
      this.props.onChange(newValues);
    }
  };

  onRemoveValue = index => {
    const newValues = [...this.state.values];
    newValues.splice(index, 1);
    this.setState({
      values: newValues,
    });
    if (this.props.onChange) {
      this.props.onChange(newValues);
    }
  };

  onFocus = () => {
    this.setState({
      isFocused: true,
    });
  };

  onBlur = () => {
    this.setState({
      isFocused: false,
    });
  };

  onWrapperClick = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  onChange = event => {
    this.setState({
      inputValue: event.target.value.trim(),
    });
  };

  onKeyDown = event => {
    switch (event.key) {
      case 'Enter': {
        this.onSubmitValue();
        break;
      }
      case ' ': {
        this.onSubmitValue();
        break;
      }
      case 'Backspace': {
        if (this.state.inputValue === '') {
          this.onRemoveValue(this.state.values.length - 1);
        }
        break;
      }
    }
  };

  stopPropogation = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <StyledMultiInput
        className={classNames('ant-input', {
          ['focused']: this.state.isFocused,
        })}
        onClick={this.onWrapperClick}
        minRows={this.props.minRows}
        maxRows={this.props.maxRows}
      >
        {this.props.placeholder && this.state.inputValue === '' && this.state.values.length === 0 && (
          <Placeholder
            className={classNames({
              ['focused']: this.state.isFocused,
            })}
            minRows={this.props.minRows}
          >
            {this.props.placeholder}
          </Placeholder>
        )}
        {this.state.values.map((value, index) => {
          return (
            <StyledTag
              key={value}
              closable
              onClose={this.stopPropogation}
              //eslint-disable-next-line react/jsx-no-bind
              afterClose={() => this.onRemoveValue(index)}
            >
              {value}
            </StyledTag>
          );
        })}
        <Input
          ref={this.inputRef}
          type="text"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={this.state.inputValue}
          onKeyDown={this.onKeyDown}
        />
      </StyledMultiInput>
    );
  }
}

export default MultiInput;
