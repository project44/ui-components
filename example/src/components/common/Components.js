import React from 'react';
import { Route } from 'react-router-dom';
import Buttons from '../components/Buttons';
import DatePicker from '../components/DatePicker';
import ChipsDemo from '../components/Chips';
import InputDemo from '../components/Input';
import CheckboxDemo from '../components/Checkbox';
import SelectDemo from "../components/Select";
import SubHeaderDemo from '../components/SubHeader'

export default (props) => {
  let { match } = props;
  return (
    <div className="p44-ui__component">
      <Route exact path={`${match.url}/buttons`} component={Buttons} />
      <Route exact path={`${match.url}/date-picker`} component={DatePicker} />
      <Route exact path={`${match.url}/chips`} component={ChipsDemo} />
      <Route exact path={`${match.url}/input`} component={InputDemo} />
      <Route exact path={`${match.url}/checkbox`} component={CheckboxDemo} />
      <Route exact path={`${match.url}/select`} component={SelectDemo} />
      <Route exact path={`${match.url}/sub-header`} component={SubHeaderDemo} />
    </div>
  )
};
