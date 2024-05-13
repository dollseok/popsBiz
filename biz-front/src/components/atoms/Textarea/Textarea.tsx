import { ChangeEvent } from 'react';
import * as S from './Textarea.styles';

export interface TextareaProps {
  $width: string;
  $height: string;
  $placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Textarea = ({
  $width,
  $height,
  $placeholder,
  onChange,
}: TextareaProps) => {
  return (
    <S.TextareaContainer
      $width={$width}
      $height={$height}
      placeholder={$placeholder}
      onChange={onChange}
    ></S.TextareaContainer>
  );
};

export { Textarea };
