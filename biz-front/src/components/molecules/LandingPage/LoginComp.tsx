import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

import { useAddLogin } from '@/apis/User/Mutations/useAddLogin';
import { Text } from '@/components/atoms/Text/Text';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

const LoginComp = () => {
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
      <Wrapper option="Column" $width="363px">
        <Text size="heading" $marginBottom="57px" $fontWeight="bold">
          관리자 페이지 <br /> 로그인
        </Text>
        <Text $marginBottom="40px">
          회원가입 후 여러분의
          <br />
          팝업 행사를 쉽게 등록하고 관리해보세요.
        </Text>
      </Wrapper>

      <Input
        type="text"
        $inputsize="medium"
        $marginBottom="20px"
        placeholder="이메일"
        onChange={e => {
          handleUserIdChange(e);
        }}
      />
      <Input
        type="password"
        $inputsize="medium"
        $marginBottom="10px"
        placeholder="비밀번호"
        onChange={e => {
          handlePasswordChange(e);
        }}
      />

      <Wrapper option="Column" $width="363px">
        <Text size="small" $color="danger">
          에러 메세지이
        </Text>
      </Wrapper>
      <Button
        $backgroundColor="blue"
        $marginTop="20px"
        $marginBottom="20px"
        onClick={handleLoginClick}
      >
        로그인
      </Button>
    </>
  );
};

export { LoginComp };
