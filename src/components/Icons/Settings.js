import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ className }) => {
  return (
    <svg className={className} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>icons/general/settings</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <path d="M15,18.5 C13.0670034,18.5 11.5,16.9329966 11.5,15 C11.5,13.0670034 13.0670034,11.5 15,11.5 C16.9329966,11.5 18.5,13.0670034 18.5,15 C18.5,16.9329966 16.9329966,18.5 15,18.5 L15,18.5 Z M22.43,15.97 C22.47,15.65 22.5,15.33 22.5,15 C22.5,14.67 22.47,14.34 22.43,14 L24.54,12.37 C24.73,12.22 24.78,11.95 24.66,11.73 L22.66,8.27 C22.54,8.05 22.27,7.96 22.05,8.05 L19.56,9.05 C19.04,8.66 18.5,8.32 17.87,8.07 L17.5,5.42 C17.46,5.18 17.25,5 17,5 L13,5 C12.75,5 12.54,5.18 12.5,5.42 L12.13,8.07 C11.5,8.32 10.96,8.66 10.44,9.05 L7.95,8.05 C7.73,7.96 7.46,8.05 7.34,8.27 L5.34,11.73 C5.21,11.95 5.27,12.22 5.46,12.37 L7.57,14 C7.53,14.34 7.5,14.67 7.5,15 C7.5,15.33 7.53,15.65 7.57,15.97 L5.46,17.63 C5.27,17.78 5.21,18.05 5.34,18.27 L7.34,21.73 C7.46,21.95 7.73,22.03 7.95,21.95 L10.44,20.94 C10.96,21.34 11.5,21.68 12.13,21.93 L12.5,24.58 C12.54,24.82 12.75,25 13,25 L17,25 C17.25,25 17.46,24.82 17.5,24.58 L17.87,21.93 C18.5,21.67 19.04,21.34 19.56,20.94 L22.05,21.95 C22.27,22.03 22.54,21.95 22.66,21.73 L24.66,18.27 C24.78,18.05 24.73,17.78 24.54,17.63 L22.43,15.97 Z" id="path-1"></path>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Customizations" transform="translate(-1104.000000, -23.000000)">
          <g id="Top-Bar">
            <g id="icons/general/settings" transform="translate(1102.000000, 21.000000)">
              <g id="Icon" transform="translate(-3.000000, -3.000000)">
                <rect id="Margin" fillOpacity="0" fill="#FFFFFF" x="3" y="3" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="Shape" fill="#575451" fillRule="nonzero" xlinkHref="#path-1"></use>
                <g id="color/gray-80" mask="url(#mask-2)" fill="#575451">
                  <rect id="Rectangle-6" x="0" y="0" width="30" height="30"></rect>
                </g>
              </g>
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
