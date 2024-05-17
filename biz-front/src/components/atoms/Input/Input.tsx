import React, { ChangeEvent, FocusEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  option?: 'default' | 'transparent' | 'grey';
  $inputsize?:
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'dateInput'
    | 'timeInput'
    | 'hashtagInput';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
  placeholder?: string;
  type: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginTop?: string;
  value?: string;
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
    onBlur,
    onClick,
    disabled,
    placeholder,
    type,
    value,
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
      onBlur={onBlur}
      onClick={onClick}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      autoComplete="off"
      value={value}
    />
  );
};

export default React.forwardRef(Input);
