import React from 'react';
import PropTypes from 'prop-types';

const BookIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>icons/general/book</title>
      <desc>Created with Sketch.</desc>
      <g id="icons/general/book" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon" fill="#FFFFFF" fillOpacity="0">
          <rect id="Margin" x="0" y="0" width="24" height="24" />
        </g>
        <path
          d="M19,2 L14,6.5 L14,17.5 L19,13 L19,2 L19,2 Z M6.5,5 C4.55,5 2.45,5.4 1,6.5 L1,21.16 C1,21.41 1.25,21.66 1.5,21.66 C1.6,21.66 1.65,21.59 1.75,21.59 C3.1,20.94 5.05,20.5 6.5,20.5 C8.45,20.5 10.55,20.9 12,22 C13.35,21.15 15.8,20.5 17.5,20.5 C19.15,20.5 20.85,20.81 22.25,21.56 C22.35,21.61 22.4,21.59 22.5,21.59 C22.75,21.59 23,21.34 23,21.09 L23,6.5 C22.4,6.05 21.75,5.75 21,5.5 L21,7.5 L21,13 L21,19 C19.9,18.65 18.7,18.5 17.5,18.5 C15.8,18.5 13.35,19.15 12,20 L12,13 L12,8.5 L12,6.5 C10.55,5.4 8.45,5 6.5,5 L6.5,5 Z"
          id="Shape"
          fill="#575451"
        />
      </g>
    </svg>
  );
};

BookIcon.propTypes = {
  className: PropTypes.string,
};

export default BookIcon;
