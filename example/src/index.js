import React from 'react';
import ReactDOM from 'react-dom';

// NOTE:  Importing ant.less from ui-components to recieve our themed version
import 'ui-components/dist/ant.css';
import 'ui-components/dist/build.css';

import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
