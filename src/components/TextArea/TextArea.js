import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import colors from '../../styles/colors';
import { ThemeContext } from '../../styles/theme';

const StyledTextArea = styled(AntInput.TextArea)`
  &:hover {
    border: 1px solid ${props => props.theme.primaryColor};
  }
  &:focus {
    border: 1px solid ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 2px ${props => rgba(props.theme.primaryColor, 0.2)};
  }
  &.text-area-hide-resize {
    resize: none;
  }
  &::placeholder {
    opacity: 0.5;
  }
`;

const Label = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
`;

const LabelCharLimit = styled.div`
  color: ${colors.secondaryTextColor};
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const NoLabelCharLimit = styled.div`
  text-align: right;
  color: ${colors.secondaryTextColor};
  font-weight: 300;
`;

export default class TextArea extends Component {
  static propTypes = {
    className: PropTypes.string,
    autosize: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        minRows: PropTypes.number,
        maxRows: PropTypes.number,
      }),
    ]),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    charLimit: PropTypes.number,
    label: PropTypes.string,
    custom: PropTypes.object,
  };

  static defaultProps = {
    classname: '',
    autosize: true,
  };

  static contextType = ThemeContext;

  onChange = event => {
    if (this.props.onChange === undefined) {
      return;
    } else if (this.props.charLimit !== undefined) {
      const value =
        event.target.value.length <= this.props.charLimit
          ? event.target.value
          : event.target.value.substring(0, this.props.charLimit);
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          value,
        },
      };
      this.props.onChange(newEvent);
    } else if (this.props.charLimit === undefined) {
      this.props.onChange(event);
    }
  };

  render() {
    return (
      <div className={classNames('ant-form-vertical', this.props.className)}>
        {this.props.label && (
          <Label className="ant-form-item-label">
            <label>{this.props.label}</label>
            {this.props.charLimit && (
              <LabelCharLimit>
                {this.props.value.length}/{this.props.charLimit}
              </LabelCharLimit>
            )}
          </Label>
        )}
        <StyledTextArea
          className={classNames({
            ['text-area-hide-resize']:
              !this.props.autosize ||
              (this.props.autosize.minRows &&
                this.props.autosize.maxRows &&
                this.props.autosize.minRows === this.props.autosize.maxRows),
          })}
          onChange={this.onChange}
          placeholder={this.props.placeholder}
          autosize={this.props.autosize}
          value={this.props.value}
          theme={this.context}
          {...this.props.custom}
        />
        {this.props.label === undefined && this.props.charLimit && (
          <NoLabelCharLimit>
            {this.props.value.length}/{this.props.charLimit}
          </NoLabelCharLimit>
        )}
      </div>
    );
  }
}
