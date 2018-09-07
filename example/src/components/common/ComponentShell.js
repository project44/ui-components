import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div className="component-shell">
      {props.children}
    </div>
  )
};
