import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ className }) => {
  return (
    <svg className={className} width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>settings</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <path d="M18,23.25 C15.1005051,23.25 12.75,20.8994949 12.75,18 C12.75,15.1005051 15.1005051,12.75 18,12.75 C20.8994949,12.75 23.25,15.1005051 23.25,18 C23.25,20.8994949 20.8994949,23.25 18,23.25 L18,23.25 Z M29.145,19.455 C29.205,18.975 29.25,18.495 29.25,18 C29.25,17.505 29.205,17.01 29.145,16.5 L32.31,14.055 C32.595,13.83 32.67,13.425 32.49,13.095 L29.49,7.905 C29.31,7.575 28.905,7.44 28.575,7.575 L24.84,9.075 C24.06,8.49 23.25,7.98 22.305,7.605 L21.75,3.63 C21.69,3.27 21.375,3 21,3 L15,3 C14.625,3 14.31,3.27 14.25,3.63 L13.695,7.605 C12.75,7.98 11.94,8.49 11.16,9.075 L7.425,7.575 C7.095,7.44 6.69,7.575 6.51,7.905 L3.51,13.095 C3.315,13.425 3.405,13.83 3.69,14.055 L6.855,16.5 C6.795,17.01 6.75,17.505 6.75,18 C6.75,18.495 6.795,18.975 6.855,19.455 L3.69,21.945 C3.405,22.17 3.315,22.575 3.51,22.905 L6.51,28.095 C6.69,28.425 7.095,28.545 7.425,28.425 L11.16,26.91 C11.94,27.51 12.75,28.02 13.695,28.395 L14.25,32.37 C14.31,32.73 14.625,33 15,33 L21,33 C21.375,33 21.69,32.73 21.75,32.37 L22.305,28.395 C23.25,28.005 24.06,27.51 24.84,26.91 L28.575,28.425 C28.905,28.545 29.31,28.425 29.49,28.095 L32.49,22.905 C32.67,22.575 32.595,22.17 32.31,21.945 L29.145,19.455 Z" id="path-1"></path>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group">
          <g id="icons/general/settings-newcolor">
            <g id="Icon">
              <rect id="Margin" fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="36" height="36"></rect>
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use id="Shape" fill="#575451" fillRule="nonzero" xlinkHref="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Settings.propTypes = {
  className: PropTypes.string,
};

export default Settings;
