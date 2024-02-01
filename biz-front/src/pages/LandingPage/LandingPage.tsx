import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import React, { useState } from 'react';
import { ColumnWrapper, LoginWrapper, RowWrapper } from './LandingPage.styled';
import { useAddLogin } from '@/apis/User/Mutations/useAddLogin';

const LandingPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const allFieldsFilled =

  const addLoginMutation = useAddLogin();

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    console.log(newUserId);
    setUserId(newUserId);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    console.log(newPassword);
    setPassword(newPassword);
  };

  const handleLoginClick = () => {
    console.log(userId);
    console.log(password);
    console.log(process.env.REACT_APP_SERVER_URL);
    addLoginMutation.mutate({ userId, password });
  };

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
        <Input
          type="text"
          placeholder="이메일"
          onChange={e => {
            handleUserIdChange(e);
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={e => {
            handlePasswordChange(e);
          }}
        />

        <ColumnWrapper>
          <Text size="small" $color="danger" $marginLeft="10px">
            에러 메세지이
          </Text>
        </ColumnWrapper>
        <Button
          $backgroundColor="blue"
          $margin="10px"
          onClick={handleLoginClick}
        >
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
