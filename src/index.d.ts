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

  interface IconProps {
    className?: string;
  }

  export const Button: (props: ButtonProps) => React.FunctionComponent<ButtonProps, {}, {}>;
  export const Layers: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Settings: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Checkmark: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Close: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
};
