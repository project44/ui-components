import React, { Component } from 'react';
import { StickyNav, DocumentIcon } from 'ui-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism/index';

const menuItems = [
  {
    label: 'Status',
    icon: 'pin_drop',
    link: 'statusRef',
  },
  {
    label: 'Route Details',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path
            id="a"
            d="M6 15.874v3.394a2 2 0 1 1-2 0v-3.394a4.002 4.002 0 0 1 0-7.748V4.732a2 2 0 1 1 2 0v3.394a4.002 4.002 0 0 1 0 7.748zM9 2h12v2H9V2zm0 18h12v2H9v-2zm2-9h12v2H11v-2z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity="0" d="M1 1h21v21H1z" />
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use fill="#000" xlinkHref="#a" />
          <g fill="#575451" mask="url(#b)">
            <path d="M0 0h24v24H0z" />
          </g>
        </g>
      </svg>
    ),
    link: 'timelineRef',
  },
  {
    label: 'Map',
    icon: 'map',
    link: 'mapRef',
  },
  {
    label: 'Documents',
    icon: <DocumentIcon />,
    link: 'document',
  },
];

export default class StickyNavDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuItems,
    };
  }

  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Sticky Nav</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">Sticky Nav is..</p>
          <section className="page-section">
            <h3 className="section-title">Sticky Nav</h3>
            <p>{"p44's Sticky Nav component is.."}</p>
            <h4 className="example-title">Sticky Nav</h4>
            <p>Sticky Nav lets you...</p>
            <div className="example__render">
              <StickyNav menuItems={this.state.menuItems} mode="follow" />
            </div>
            <div id="statusRef" style={{ height: 600, backgroundColor: 'red' }}>
              <h3>Status Section</h3>
            </div>
            <div id="timelineRef" style={{ height: 600, backgroundColor: 'white' }}>
              <h3>Route Section</h3>
            </div>
            <div id="mapRef" style={{ height: 600, backgroundColor: 'blue' }}>
              <h3>Map Section</h3>
            </div>
            <div id="document" style={{ height: 600, backgroundColor: 'green' }}>
              <h3>Document Section</h3>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {`import { StickyNav } from 'ui-components';\n
<Select
  menuItems={this.state.menuItems}
>
</Select>`}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
