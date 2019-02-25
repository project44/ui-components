import PropTypes from 'prop-types';

import { primaryBlue } from './colors';

export default {
  primaryColor: primaryBlue,
  secondaryColor: primaryBlue
};

export const defaultThemeShape = {
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string
};
