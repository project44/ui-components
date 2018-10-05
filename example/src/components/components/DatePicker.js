import React from 'react';
import { DatePicker, DateRange } from 'ui-components';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";

export default (props) => {
  return (
    <div className="p44-ui__page">
      <div className="page-header">
        <h1>Datepicker</h1>
      </div>
      <div className="page-content">
        <p className="page-intro">
          A datepicker is an input to capture a date. You can select a single date, date range or date and time
        </p>
        <section className="page-section">
          <h3 className="section-title">Basic</h3>
          <p>
            Users can input or select or input a date in a panel.
          </p>
          <div className="example__render">
            <DatePicker placeholder="Select Date"></DatePicker>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { DatePicker } from 'ui-components';\n
<DatePicker placeholder="Select Date"></DatePicker>`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section className="page-section">
          <h3 className="section-title">Date Range</h3>
          <p>
            Users can input or select or input a date range in a panel.
          </p>
          <div className="example__render">
            <DateRange placeholder="MM/DD/YYYY" startLabel="Start Date" endLabel="End Date"></DateRange>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { DateRange } from 'ui-components';\n
<DatePicker placeholder="Select Date"></DatePicker>`}
            </SyntaxHighlighter>
          </div>
        </section>

      </div>
    </div>
  )
}
