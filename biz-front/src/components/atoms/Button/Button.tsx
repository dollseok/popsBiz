import React, { ForwardedRef, forwardRef } from 'react';

import * as S from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated' | 'danger' | 'border';
  size?: 'small' | 'medium' | 'large' | 'extraSmall';
  $fontSize?: string;
  $backgroundColor?: string;
  $border?: string;
  $color?: string;
  $width?: string;
  $margin?: string;
  onClick?: () => void;
}

const Button = (
  {
    option,
    size,
    $backgroundColor,
    $border,
    $color,
    $width,
    $margin,
    children,
    onClick,
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.Button
      ref={ref}
      option={option}
      size={size}
      $backgroundColor={$backgroundColor}
      $margin={$margin}
      $color={$color}
      $border={$border}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
