import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="a" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path fill="#FFF" fillOpacity="0" d="M0 0h24v24H0z"/>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"/>
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a"/>
        <g fill="#575451" mask="url(#b)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </g>
    </svg>
  );
};

ChevronDown.propTypes = {
  className: PropTypes.string,
};

export default ChevronDown;
