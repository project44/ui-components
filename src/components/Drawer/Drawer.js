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
    placement: PropTypes.string.isRequired,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: undefined,
  };

  render() {
    return (
      <AntDrawer
        visible={this.props.visible}
        onClose={this.props.onClose}
        placement={this.props.placement}
        closable={false}
        width={this.props.width}
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
