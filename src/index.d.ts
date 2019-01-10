declare module 'ui-components' {
  import React from 'react';

  interface ButtonProps {
    upload?: Boolean;
    download?: Boolean;
    clickFn?: () => any;
    blurFn?: () => any;
    type?: string;
    size?: string;
    className?: string;
    children?: any;
  }
  export const Button: (props: ButtonProps) => React.FunctionComponent;
  export const Layers: (props) => React.FunctionComponent;
};
