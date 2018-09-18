import React from 'react';
import {Divider} from "antd";

export default (props) => {
  return (
    <div className="component-shell">
      <h1 className="component__title">{props.name}</h1>
      <Divider />
      <div className="component__description mb-8">
        {props.description}
      </div>
      <div className="component__example bg-white my-4 p-4 shadow-md rounded">
        {props.children}
      </div>
    </div>
  )
};
