import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="infoa" d="M11 9h2V7h-2v2zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2zm-1 15h2v-6h-2v6z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z"/>
        <mask id="infob" fill="#fff">
          <use xlinkHref="#infoa"/>
        </mask>
        <use fill="#236192" fillRule="nonzero" xlinkHref="#infoa"/>
        <g fill="#575451" mask="url(#infob)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </g>
    </svg>

  );
};

Info.propTypes = {
  className: PropTypes.string,
};

export default Info;
