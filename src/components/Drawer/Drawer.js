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

const StyledTitle = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-size: 21px;
  max-width: 100%;
  padding-right: 1rem;
  position: relative;
  width: auto;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
`;

const StyledActions = styled.div`
  display: flex;
  flex: 0 1 auto;
  max-width: 100%;
  position: relative;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
  margin-right: 0;
`;

export default class Drawer extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
    width: PropTypes.number,
    bodyStyle: PropTypes.object,
    style: PropTypes.object,
    drawerHeaderContent: PropTypes.string.isRequired,
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
        <Header className="drawer-header">
          <StyledTitle>{this.props.title}</StyledTitle>

          {this.props.drawerHeaderContent && <StyledContent>Drawer Content</StyledContent>}

          <StyledActions>
            <StyledButton clickFn={this.props.onClose} size={'sm'} icon>
              <Close />
            </StyledButton>
          </StyledActions>
        </Header>
        {this.props.children}
      </AntDrawer>
    );
  }
}
