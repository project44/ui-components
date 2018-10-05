import React, {Component} from 'react';
import { Checkbox } from 'ui-components';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";
import ltlIcon from '../../assets/images/ltl-sm.svg';
import oceanIcon from '../../assets/images/ocean-sm.svg';
import parcelIcon from '../../assets/images/parcel-sm.svg';
import railIcon from '../../assets/images/rail-sm.svg';
import tlIcon from '../../assets/images/tl-sm.svg';
import vltlIcon from '../../assets/images/vltl-sm.svg';
import allIcon from '../../assets/images/all-modes-sm.svg';
import _ from 'lodash';


const modalFilterData = [
  { label: 'All Modes', value: 'ALL' },
  { label: 'Truckload', value: 'TL' },
  { label: 'Ocean', value: 'OCEAN' },
  { label: 'Rail', value: 'RAIL' },
  { label: 'LTL', value: 'LTL' },
  { label: 'VLTL', value: 'VLTL' },
  { label: 'Parcel', value: 'PARCEL' }
]

export default class CheckboxDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkboxData: [
        {label: 'Unselected + Label', value: '1', checked: false},
        {label: 'Selected + Label', value: '2', checked: true},
        {label: 'Unselected + Label', value: '3', checked: false},
        {label: 'Selected + Label', value: '4', checked: true}
      ]
    };
  }

  onChange = (e) => {
    const updatedValues = _.map(this.state.checkboxData, (checkbox) => {
      checkbox.checked = checkbox.value === e.target.value ? !checkbox.checked : checkbox.checked;
      checkbox.label = checkbox.checked ? 'Selected + Label' : 'Unselected + Label';
      return checkbox;
    });

    this.setState({
      checkboxData: updatedValues
    });
  }

  render(){
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Checkbox</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Selectable inputs to communicate that one or many things are true or false.
          </p>
          <section className="page-section">
            <h3 className="section-title">Checkbox</h3>
            <p>
              A checkable input that communicates if an option is true, false or indeterminate. Can be displayed horizontally or vertically or styled.
            </p>
            <h4 className="example-title">Horizontal</h4>
            <div className="example__render">
              <Checkbox checkboxData={this.state.checkboxData} onChange={this.onChange} defaultValue={this.state.selectedValues}></Checkbox>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Checkbox } from 'ui-components';\n
<Checkbox checkboxData={checkboxData}></Checkbox>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Vertical</h4>
            <div className="example__render">
              <Checkbox checkboxData={this.state.checkboxData} onChange={this.onChange} defaultValue={this.state.selectedValues} layout="column"></Checkbox>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Checkbox } from 'ui-components';\n
<Checkbox checkboxData={checkboxData} layout="column"></Checkbox>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Styled Checkbox</h3>
            <p>A styled checkbox group that communicates an option is true or false. This example is specific to Multi-Modal Search Filter.</p>
            <div className="example__render">
              <Checkbox checkboxData={modalFilterData} styled={true}></Checkbox>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Checkbox } from 'ui-components';
import ltlIcon from '../../assets/images/ltl-sm.svg';
import oceanIcon from '../../assets/images/ocean-sm.svg';
import parcelIcon from '../../assets/images/parcel-sm.svg';
import railIcon from '../../assets/images/rail-sm.svg';
import tlIcon from '../../assets/images/tl-sm.svg';
import vltlIcon from '../../assets/images/vltl-sm.svg';
import allIcon from '../../assets/images/all-modes-sm.svg';

const modalFilterData = [
  { label: 'All Modes', value: 'All Modes', icon: allIcon },
  { label: 'Truckload', value: 'Truckload', icon: tlIcon},
  { label: 'Ocean', value: 'Ocean', icon: oceanIcon},
  { label: 'Rail', value: 'Rail', icon: railIcon},
  { label: 'LTL', value: 'LTL', icon: ltlIcon},
  { label: 'VLTL', value: 'VLTL', icon: vltlIcon },
  { label: 'Parcel', value: 'Parcel', icon: parcelIcon }
]
<Checkbox checkboxData={modalFilterData} styled={true}></Checkbox>`}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    )
  }
}
