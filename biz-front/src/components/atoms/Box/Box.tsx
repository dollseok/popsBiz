import React, { forwardRef } from 'react';
import * as S from './Box.styles';

export interface BoxProps {
  $option?:
    | 'InputBox'
    | 'greyLine'
    | 'dropdown'
    | 'hashtagBox'
    | 'sideModalBox'
    | 'borderBox'
    | 'ticketBox'
    | 'none';
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $border?: string;
  $top?: string;
  children?: React.ReactNode;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      $option,
      $width,
      $height,
      $backgroundColor,
      $border,
      $top,
      children,
    }: BoxProps,
    ref
  ) => {
    return (
      <S.Box
        $option={$option}
        $width={$width}
        $height={$height}
        $backgroundColor={$backgroundColor}
        $border={$border}
        $top={$top}
        ref={ref}
      >
        <>{children}</>
      </S.Box>
    );
  }
);

export { Box };
