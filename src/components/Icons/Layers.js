import React from 'react';
import PropTypes from 'prop-types';

const Layers = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="a" d="M12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0 2.54l-7.38-5.73L3 14.07l9 7 9-7-1.63-1.27L12 18.54z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z"/>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"/>
        </mask>
        <use fill="#575451" fillRule="nonzero" xlinkHref="#a"/>
        <g fill="#575451" mask="url(#b)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </g>
    </svg>
  );
};

Layers.propTypes = {
  className: PropTypes.string,
};

export default Layers;
