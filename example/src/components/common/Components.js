import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Foo from '../components/Foo';
import Bar from '../components/Bar';
import Buttons from '../components/Buttons';
import DatePicker from '../components/DatePicker'
import ChipsDemo from '../components/Chips'


export default (props) => {
  let { match } = props;
  return (
    <div className="p44-ui__component">
      <Route exact path={`${match.url}/foo`} component={Foo} />
      <Route exact path={`${match.url}/bar`} component={Bar} />
      <Route exact path={`${match.url}/buttons`} component={Buttons} />
      <Route exact path={`${match.url}/date-picker`} component={DatePicker} />
      <Route exact path={`${match.url}/chips`} component={ChipsDemo} />
    </div>
  )
};
