declare module 'ui-components' {
  import React from 'react';
  import { ButtonProps as AntButtonProps } from 'antd';

  interface ButtonProps {
    upload?: boolean;
    download?: boolean;
    clickFn?: () => any;
    blurFn?: () => any;
    type?: string;
    size?: string;
    className?: string;
    children?: any;
    loading?: boolean;
  }

  interface IconProps {
    className?: string;
  }

  export const Button: (props: ButtonProps) => React.FunctionComponent<ButtonProps, {}, {}>;
  export const ColorPicker: (props: any) => React.Component<{}, {}, {}>
  export const Layers: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Settings: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Checkmark: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Close: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const Info: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
  export const ChevronDown: (props: IconProps) => React.FunctionComponent<IconProps, {}, {}>;
};
