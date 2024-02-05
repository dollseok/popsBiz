import React from 'react';
import * as S from './Box.styles';

export interface BoxProps {
  $option?: 'InputBox' | 'none';
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $border?: string;
  children?: React.ReactNode;
}

const Box = ({
  $option,
  $width,
  $height,
  $backgroundColor,
  $border,
  children,
}: BoxProps) => {
  return (
    <S.Box
      $option={$option}
      $width={$width}
      $height={$height}
      $backgroundColor={$backgroundColor}
      $border={$border}
    >
      <>{children}</>
    </S.Box>
  );
};

export { Box };
