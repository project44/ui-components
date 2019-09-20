import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import AntCard from 'antd/lib/card';
import omit from 'lodash/omit';
import styled from 'styled-components';
import { black, primaryGreyTwenty, white, primaryGreyFive } from '../../styles/colors';

const StyledCard = styled(AntCard)`
  background: ${white};
  box-shadow: 0 1px 2px 0 rgba(${black}, 0.5);
  margin-bottom: 1rem;

  header {
    border-bottom: 1px solid ${primaryGreyTwenty};
  }

  header,
  main,
  footer {
    padding: 1.5rem 1.5rem;

    .row {
      margin-left: -1.5rem;
      margin-right: -1.5rem;
    }
  }

  footer {
    border-top: 1px solid ${primaryGreyTwenty};

    &.footerBg {
      background-color: ${primaryGreyFive};
      border: none;
    }
  }
`;

const Card = ({ children, ...rest }) => {
  const propsMinusClassNames = omit(rest, ['classNames']);
  return (
    <StyledCard className={classNames(rest.classNames)} {...propsMinusClassNames}>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};
export default Card;
