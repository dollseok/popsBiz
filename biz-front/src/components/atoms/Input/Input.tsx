import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  option?: 'default' | 'grey';
  inputSize?: 'medium' | 'large';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
}

const Input = (
  { option, inputSize, onChange, placeholder, type }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <S.Input
      ref={ref}
      option={option}
      inputSize={inputSize}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default React.forwardRef(Input);
