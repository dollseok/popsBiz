import React, { ForwardedRef, forwardRef } from 'react';

import * as S from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?:
    | 'activated'
    | 'deactivated'
    | 'danger'
    | 'border'
    | 'textButton'
    | 'SideNavButton'
    | 'SideNavMainButton';
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
  $fontWeight?: string;
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
    $fontWeight,
    children,
    ...attributes
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
      $fontWeight={$fontWeight}
      {...attributes}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
