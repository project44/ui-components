declare module 'ui-components' {
  import React from 'react';
  import { ButtonProps as AntButtonProps } from 'antd/lib/button';
  import { TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
  interface ButtonProps extends Partial<AntButtonProps> {
    upload?: boolean;
    download?: boolean;
    clickFn?: () => any;
    blurFn?: () => any;
    type?: string;
    size?: string;
    className?: string;
    children?: any;
    loading?: boolean;
    style?: Partial<CSSStyleDeclaration>;
  }

  interface ColorPickerProps {
    placement?: string;
    color?: string;
    onChange?: (color: string) => void;
  }

  interface IconProps {
    className?: string;
  }

  export const Button: (props: ButtonProps) => React.FunctionComponent<ButtonProps, {}>;
  export class ColorPicker extends React.Component<ColorPickerProps, any> {};
  export const Layers: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Settings: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Checkmark: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Close: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Info: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const ChevronDown: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export class TextArea extends React.Component<AntTextAreaProps, any> {};
}
