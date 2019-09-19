import React from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import './Modal.scss';
const Modal = ({ children, ...rest }) => {
  return <AntModal {...rest}>{children}</AntModal>;
};

Modal.propTypes = {
  children: PropTypes.any,
};
export default Modal;
