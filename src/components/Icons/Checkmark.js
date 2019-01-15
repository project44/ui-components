import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="checka" d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z"/>
        <mask id="checkb" fill="#fff">
          <use xlinkHref="#checka"/>
        </mask>
        <use fill="#2091A9" fillRule="nonzero" xlinkHref="#checka"/>
        <g fill="#575451" mask="url(#checkb)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </g>
    </svg>
  );
};

Checkmark.propTypes = {
  className: PropTypes.string,
};

export default Checkmark;
