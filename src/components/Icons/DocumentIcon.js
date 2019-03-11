import React from "react";
import PropTypes from "prop-types";

const DocumentIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M12.5,5.83333333 L17.0833333,5.83333333 L12.5,1.25 L12.5,5.83333333 L12.5,5.83333333 Z M6.66666667,0 L13.3333333,0 L18.3333333,5 L18.3333333,15 C18.3333333,15.9204746 17.5871412,16.6666667 16.6666667,16.6666667 L6.66666667,16.6666667 C5.74166667,16.6666667 5,15.9166667 5,15 L5,1.66666667 C5,0.746192084 5.74619208,1.69088438e-16 6.66666667,0 L6.66666667,0 Z M3.33333333,3.33333333 L3.33333333,18.3333333 L16.6666667,18.3333333 L16.6666667,20 L3.33333333,20 C2.41285875,20 1.66666667,19.2538079 1.66666667,18.3333333 L1.66666667,3.33333333 L3.33333333,3.33333333 Z"
          id="docicon"
        />
      </defs>
      <g
        fill="none"
        fill-rule="evenodd"
      >
        <mask id="docicon" fill="white">
          <use xlinHref="#docicon" />
        </mask>
        <use
          id="Shape"
          fill="#000000"
          fill-rule="nonzero"
          xlinkHref="#docicon"
        />
      </g>
    </svg>
  );
};

DocumentIcon.propTypes = {
  className: PropTypes.string
};

export default DocumentIcon;
