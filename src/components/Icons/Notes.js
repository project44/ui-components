import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path
          id="noteIcon"
          d="M22 5.5C22 3.568 20.482 2 18.613 2H5.387C3.517 2 2 3.568 2 5.5v7C2 14.432 3.518 16 5.387 16H11.5l7.161 6.932L18.613 16C20.483 16 22 14.432 22 12.5v-7z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity="0" d="M0 0h24v24H0z" />
        <mask id="noteIcon" fill="#fff">
          <use xlinkHref="#notnoteIcone" />
        </mask>
        <use fill="#EBEBEB" xlinkHref="#noteIcon" />
        <g fill="#575451" mask="url(#nonoteIconte)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
};

Notes.propTypes = {
  className: PropTypes.string,
};

export default Notes;
