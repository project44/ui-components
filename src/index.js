// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
//
// import styles from './styles.css'
//
// export default class ExampleComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   }
//
//   render() {
//     const {
//       text
//     } = this.props
//
//     return (
//       <div className={styles.test}>
//         Example Component: {text}
//       </div>
//     )
//   }
// }

import Autocomplete from './components/Autocomplete/Autocomplete';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Chips from './components/Chips/Chips';
import DatePicker from './components/DatePicker/DatePicker';
import Input from './components/Input/Input';
import MultiSelect from './components/MultiSelect/MultiSelect';
import Select from './components/Select/Select';
import ShipmentModeIcon from './components/ShipmentModeIcon/ShipmentModeIcon';
import SubHeader from './components/SubHeader/SubHeader';
import Radio from './components/Radio/Radio';

// Our global styles
import './styles/init.scss';

// export Components as named exports
export {
  Autocomplete,
  Button,
  Checkbox,
  Chips,
  DatePicker,
  Input,
  MultiSelect,
  Select,
  ShipmentModeIcon,
  SubHeader,
  Radio
};
