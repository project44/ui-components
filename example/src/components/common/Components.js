import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Foo from '../components/Foo';
import Bar from '../components/Bar';

export default (props) => {
  console.log(props);
  let { match } = props;
  return (
    <div className="p44-ui__component">
      <Route exact path={`${match.url}/foo`} component={Foo} />
      <Route exact path={`${match.url}/bar`} component={Bar} />
    </div>
  )
};
