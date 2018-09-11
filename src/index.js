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

// export Foo and Bar as named exports
export { Foo, Bar, Button, DatePicker }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Foo, Bar, Button, DatePicker }
