import { ComponentPropsWithRef } from 'react';
import * as S from './Image.styles';

export interface ImageProps extends ComponentPropsWithRef<'img'> {
  width?: number;
  height?: number;
  $margin?: string;
  $borderRadius?: number;
  $unit?: 'rem' | 'px' | 'em' | '%';
}

const Image = ({
  src,
  width,
  height,
  $margin,
  $borderRadius,
  $unit = 'px',
  ...attributes
}: ImageProps) => {
  return (
    <S.ImageContainer
      src={src}
      width={width}
      height={height}
      $margin={$margin}
      $borderRadius={$borderRadius}
      $unit={$unit}
      {...attributes}
    />
  );
};

export { Image };
