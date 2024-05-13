import * as S from './Textarea.styles';

export interface TextareaProps {
  $width: string;
  $height: string;
  $placeholder?: string;
}

const Textarea = ({ $width, $height, $placeholder }: TextareaProps) => {
  return (
    <S.TextareaContainer
      $width={$width}
      $height={$height}
      placeholder={$placeholder}
    ></S.TextareaContainer>
  );
};

export { Textarea };
