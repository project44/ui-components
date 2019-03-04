import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';

const StyledCopy = styled.div`
  height: 18px;
  width: 14px;
  border: 2px solid ${colors.darkBackgroundColor};
  border-right: transparent;
  border-bottom: transparent;
  border-radius: 15%;
  margin-right: 4px;
  margin-bottom: 4px;

  > div {
    height: 18px;
    width: 14px;
    border: 2px solid ${colors.darkBackgroundColor};
    margin-top: 2px;
    margin-left: 2px;
    border-radius: 15%;
  }
`;

const Copy = ({ className }) => {
  return (
    <StyledCopy className={className}>
      <div />
    </StyledCopy>
  );
};

Copy.propTypes = {
  className: PropTypes.string,
};

export default Copy;
