import React from 'react';
import * as S from './Wrapper.styles';

export interface WrapperProps {
  option?: 'Column' | 'Row' | 'Center' | 'RowSideEnd' | 'Default';
  $size?:
    | 'SideNav'
    | 'Nav'
    | 'Login'
    | 'Signup'
    | 'Footer'
    | 'Default'
    | 'MainContent';
  $backgroundColor?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
  $paddingTop?: string;
  $paddingBottom?: string;
  $width?: string;
  children: React.ReactNode;
}

const Wrapper = ({
  option,
  $backgroundColor,
  $marginLeft,
  $marginRight,
  $marginBottom,
  $marginTop,
  $paddingLeft,
  $paddingRight,
  $paddingBottom,
  $paddingTop,
  $size,
  $width,
  children,
}: WrapperProps) => {
  return (
    <S.Wrapper
      option={option}
      $backgroundColor={$backgroundColor}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
      $paddingTop={$paddingTop}
      $paddingBottom={$paddingBottom}
      $size={$size}
      $width={$width}
    >
      <>{children}</>
    </S.Wrapper>
  );
};

export { Wrapper };
