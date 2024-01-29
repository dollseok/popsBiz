import { ComponentPropsWithRef } from 'react';
import * as S from './Image.styles';

export interface ImageProps extends ComponentPropsWithRef<'img'> {
  width?: number;
  height?: number;
  $margin?: string;
  $unit?: 'rem' | 'px' | 'em' | '%';
}

const Image = ({
  width,
  height,
  $margin,
  $unit = 'rem',
  ...attributes
}: ImageProps) => {
  return (
    <S.ImageContainer
      width={width}
      height={height}
      $margin={$margin}
      $unit={$unit}
      {...attributes}
    />
  );
};

export { Image };
