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

import Foo from './components/Foo'
import Bar from './components/Bar'
import Button from './components/Button/Button'
import DatePicker from './components/DatePicker/DatePicker'
import Chips from './components/Chips/Chips'

// Our global styles
import './styles/main.scss';

// export Components as named exports
export { Foo, Bar, Button, DatePicker, Chips }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Foo, Bar, Button, DatePicker, Chips }
