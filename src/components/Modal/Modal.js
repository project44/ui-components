import React from 'react';
import AntModal from 'antd/lib/modal';

const Modal = ({ children, ...otherProps }) => {
  return (
    <>
      <AntModal {...otherProps}>{children}</AntModal>
    </>
  );
};

export default Modal;
