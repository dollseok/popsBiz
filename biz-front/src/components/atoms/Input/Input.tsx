import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  option?: 'default' | 'grey';
  $inputsize?: 'small' | 'medium' | 'large';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginTop?: string;
}

const Input = (
  {
    option,
    $inputsize,
    $marginLeft,
    $marginRight,
    $marginBottom,
    $marginTop,
    onChange,
    placeholder,
    type,
  }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <S.Input
      ref={ref}
      option={option}
      $inputsize={$inputsize}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $marginBottom={$marginBottom}
      $marginTop={$marginTop}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default React.forwardRef(Input);
