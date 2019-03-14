import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = ({ className }) => {
  return (
    <svg
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <polygon id="chevr" points="6 14.58 10.58 10 6 5.41 7.41 4 13.41 10 7.41 16" />
      </defs>
      <g fill="#000000" fillRule="evenodd">
        <mask id="chevr" fill="white">
          <use xlinkHref="#chevr" />
        </mask>
        <use fillRule="nonzero" xlinkHref="#chevr" />
      </g>
    </svg>
  );
};

ChevronRight.propTypes = {
  className: PropTypes.string,
};

export default ChevronRight;
