import React, { ChangeEvent, FocusEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  option?: 'default' | 'transparent' | 'grey';
  $inputsize?:
    | 'small'
    | 'medium'
    | 'large'
    | 'fullSize'
    | 'phoneNumberInput'
    | 'dateInput'
    | 'timeInput'
    | 'siteInput'
    | 'ticketDataInput'
    | 'ticketDateInput'
    | 'ticketTimeInput'
    | 'hashtagInput';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  type: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginTop?: string;
  value?: string | number;
  $readonly?: boolean;
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
    onKeyUp,
    disabled,
    placeholder,
    type,
    value,
    $readonly,
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
      onKeyUp={onKeyUp}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      autoComplete="off"
      value={value}
      $readonly={$readonly}
    />
  );
};

export default React.forwardRef(Input);
