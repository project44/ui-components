import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';

const StyledCopy = styled.div`
  border-bottom: transparent;
  border-radius: 15%;
  border-right: transparent;
  border: 2px solid ${colors.darkBackgroundColor};
  height: 18px;
  margin-bottom: 4px;
  margin-right: 4px;
  width: 14px;

  > div {
    border-radius: 15%;
    border: 2px solid ${colors.darkBackgroundColor};
    height: 18px;
    margin-left: 2px;
    margin-top: 2px;
    width: 14px;
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
