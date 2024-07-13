import * as S from './Text.styles';
import { ReactNode } from 'react';

export type TextSize =
  | 'heading'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6';

export type FontWeightType = 'regular' | 'bold' | 'extraBold' | 'heavy';

export interface TextProps {
  size?: TextSize;

  $color?: string;
  $fontWeight?: FontWeightType;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $lineHeight?: string;
  children?: ReactNode;
}

const Text = ({
  size,
  $color,

  $fontWeight,
  $marginRight,
  $marginLeft,
  $marginTop,
  $marginBottom,
  $lineHeight,
  children,
}: TextProps) => {
  return (
    <S.TextContainer
      size={size}
      $color={$color}
      $fontWeight={$fontWeight}
      $marginRight={$marginRight}
      $marginLeft={$marginLeft}
      $marginBottom={$marginBottom}
      $marginTop={$marginTop}
      $lineHeight={$lineHeight}
    >
      {children}
    </S.TextContainer>
  );
};

export { Text };
