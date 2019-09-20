import React from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import styled from 'styled-components';

const StyledModal = styled(AntModal)``;
const Modal = ({ children, ...rest }) => {
  return <StyledModal {...rest}>{children}</StyledModal>;
};

Modal.propTypes = {
  children: PropTypes.any,
};
export default Modal;
