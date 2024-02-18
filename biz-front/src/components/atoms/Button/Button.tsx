import React, { ForwardedRef, forwardRef } from 'react';

import * as S from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated' | 'danger' | 'border' | 'textButton';
  size?: 'small' | 'medium' | 'large' | 'extraSmall' | 'textSize';
  $fontSize?: string;
  $backgroundColor?: string;
  $border?: string;
  $color?: string;
  $width?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $marginBottom?: string;
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
    $marginLeft,
    $marginRight,
    $marginBottom,
    $marginTop,
    $fontSize,
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
      $color={$color}
      $fontSize={$fontSize}
      $border={$border}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
