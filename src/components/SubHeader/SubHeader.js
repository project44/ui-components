import React from 'react';
import './SubHeader.scss';

const SubHeader = (props) => {
  return (
    <header className="sub-header d-flex align-items-center">
      <div className="col action-line d-none d-sm-flex"></div>
      <div className="container">
        <div className={props.stackOnMobile ? 'mobile-column d-flex flex-column flex-sm-row align-items-center' : 'mobile-row d-flex flex-sm-row no-gutters' }>
          {props.children}
        </div>
      </div>
      <div className="col d-none d-sm-flex"></div>
    </header>
  );
};

export default SubHeader;
