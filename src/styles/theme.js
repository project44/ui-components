import React from 'react';
import PropTypes from 'prop-types';

import { primaryBlue } from './colors';

export const defaultTheme = {
  primaryColor: primaryBlue,
  secondaryColor: primaryBlue,
};

export const defaultThemeShape = {
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string,
};

export const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};
