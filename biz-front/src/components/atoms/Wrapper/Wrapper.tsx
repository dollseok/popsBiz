import React from 'react';
import * as S from './Wrapper.styles';

export interface WrapperProps {
  option?: 'Column' | 'Row' | 'Center' | 'RowSideEnd' | 'Default';
  $size?: 'SideNav' | 'Nav' | 'Login' | 'Signup' | 'Footer' | 'Default';
  $backgroundColor?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $marginBottom?: string;
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
      $size={$size}
      $width={$width}
    >
      <>{children}</>
    </S.Wrapper>
  );
};

export { Wrapper };
