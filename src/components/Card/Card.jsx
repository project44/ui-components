import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import AntCard from 'antd/lib/card';
import omit from 'lodash/omit';
import './Card.scss';
const Card = ({ children, ...rest }) => {
  const propsMinusClassNames = omit(rest, ['classNames']);
  return (
    <AntCard className={classNames('card', rest.classNames)} {...propsMinusClassNames}>
      {children}
    </AntCard>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};
export default Card;
