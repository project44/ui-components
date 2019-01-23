import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import classNames from 'classnames';

import './TextArea.scss';

export default class Input extends Component {
  static propTypes = {
    ...AntInput.TextArea.propTypes
  }

  static defaultProps = {
    autosize: true,
  }

  render() {
    return (
      <div>
        <AntInput.TextArea
          className={classNames(
            {
              ['p44-text-area-hide-resize']: !this.props.autosize
            },
            this.props.className
          )}
          {...this.props}
        />
      </div>
    );
  }
}
