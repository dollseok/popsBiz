import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import React from 'react';
import { ColumnWrapper, LoginWrapper, RowWrapper } from './LandingPage.styled';

const LandingPage = () => {
  return (
    <>
      {/* <h1>여기는 최초 로그인 페이지</h1>
      <div>좌측 이미지</div>
      <div>우측 관리자 페이지 로그인</div> */}
      <LoginWrapper>
        <ColumnWrapper>
          <Text size="heading" $marginBottom="57px" $fontWeight="bold">
            관리자 페이지 <br /> 로그인
          </Text>
          <Text $marginBottom="40px">
            회원가입 후 여러분의
            <br />
            팝업 행사를 쉽게 등록하고 관리해보세요.
          </Text>
        </ColumnWrapper>
        <Input type="text" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />

        <ColumnWrapper>
          <Text size="small" $color="danger" $marginLeft="10px">
            에러 메세지이
          </Text>
        </ColumnWrapper>
        <Button $backgroundColor="blue" $margin="10px">
          로그인
        </Button>

        <ColumnWrapper>
          <RowWrapper>
            <Button size="extraSmall" option="textButton">
              회원가입
            </Button>
            <Button size="extraSmall" option="textButton">
              비밀번호 찾기
            </Button>
          </RowWrapper>
        </ColumnWrapper>

        <Button option="border" $margin="10px">
          구글 이메일로 시작하기
        </Button>
        <Button option="border" $margin="10px">
          페이스북으로 시작하기
        </Button>
      </LoginWrapper>
    </>
  );
};

export default LandingPage;
