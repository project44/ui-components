import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import routes from '../../routes';
import Buttons from '../components/Buttons';
import DatePicker from '../components/DatePicker';
import ChipsDemo from '../components/Chips';
import InputDemo from '../components/Input';
import CheckboxDemo from '../components/Checkbox';
import SelectDemo from "../components/Select";
import RadioDemo from "../components/Radio";
import ShipmentModeIconDemo from "../components/ShipmentModeIcon";
import SubHeaderDemo from "../components/SubHeader";
import StickyNavDemo from "../components/StickyNav";
import ColorPicker from '../components/ColorPicker';

const Components =  (props) => {
  let { match } = props;
  return (
    <div className="p44-ui__component">
      <Route exact path={`${match.url}${routes.buttons}`} component={Buttons} />
      <Route exact path={`${match.url}${routes.chips}`} component={ChipsDemo} />
      <Route exact path={`${match.url}${routes.datepicker}`} component={DatePicker} />
      <Route exact path={`${match.url}${routes.input}`} component={InputDemo} />
      <Route exact path={`${match.url}${routes.checkbox}`} component={CheckboxDemo} />
      <Route exact path={`${match.url}${routes.select}`} component={SelectDemo} />
      <Route exact path={`${match.url}${routes.radio}`} component={RadioDemo} />
      <Route exact path={`${match.url}${routes.subHeader}`} component={SubHeaderDemo} />
      <Route exact path={`${match.url}${routes.stickyNav}`} component={StickyNavDemo} />
      <Route exact path={`${match.url}${routes.shipmentModeIcon}`} component={ShipmentModeIconDemo} />
      <Route exact path={`${match.url}${routes.colorPicker}`} component={ColorPicker} />
    </div>
  );
};

Components.propTypes = {
  match: PropTypes.string
};

export default Components;
