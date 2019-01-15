import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="closea" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z"/>
        <mask id="closeb" fill="#fff">
          <use xlinkHref="#closea"/>
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#closea"/>
        <g fill="#575451" mask="url(#closeb)">
          <path d="M-3-3h30v30H-3z"/>
        </g>
      </g>
    </svg>
  );
};

Close.propTypes = {
  className: PropTypes.string,
};

export default Close;
