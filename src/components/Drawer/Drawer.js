import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntDrawer } from 'antd';
import styled from 'styled-components';

import Button from '../Button/Button';
import { Close } from '../Icons';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 21px;
`;

const StyledButton = styled(Button)`
  margin-left: 18px;
  margin-right: 0;
`;

export default class Drawer extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    placement: PropTypes.oneOf('right', 'left', 'top', 'bottom'),
    width: PropTypes.number,
    bodyStyle: PropTypes.object,
    style: PropTypes.object,
  };

  static defaultProps = {
    width: undefined,
    placement: 'right',
  };

  render() {
    return (
      <AntDrawer
        visible={this.props.visible}
        onClose={this.props.onClose}
        placement={this.props.placement}
        closable={false}
        width={this.props.width}
        bodyStyle={this.props.bodyStyle}
        style={this.props.style}
      >
        <Header>
          <Title>{this.props.title}</Title>
          <StyledButton clickFn={this.props.onClose} size={'sm'} icon>
            <Close />
          </StyledButton>
        </Header>
        {this.props.children}
      </AntDrawer>
    );
  }
}
