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

import Button from './components/Button/Button'
import DatePicker from './components/DatePicker/DatePicker'
import Chips from './components/Chips/Chips'
import Input from './components/Input/Input'
import Checkbox from './components/Checkbox/Checkbox'
import Autocomplete from './components/Autocomplete/Autocomplete'
import Select from './components/Select/Select'
import MultiSelect from './components/MultiSelect/MultiSelect'
import SubHeader from './components/SubHeader/SubHeader'

// Our global styles
import './styles/init.scss';

// export Components as named exports
export { Button, DatePicker, Chips, Input, Checkbox, Autocomplete, Select, MultiSelect, SubHeader }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Button, DatePicker, Chips, Input, Checkbox, Autocomplete, Select, MultiSelect, SubHeader }
