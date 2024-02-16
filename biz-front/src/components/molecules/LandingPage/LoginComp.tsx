import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

import { useAddLogin } from '@/apis/User/Mutations/useAddLogin';
import { Text } from '@/components/atoms/Text/Text';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import { PATH } from '@/constants/path';
import { useRecoilValue } from 'recoil';
import { loginErrorState } from '@/states/User';

const LoginComp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loginError = useRecoilValue(loginErrorState);

  const addLoginMutation = useAddLogin(PATH.ROOT);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLoginClick = () => {
    addLoginMutation.mutate({ email, password });
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
          handleEmailChange(e);
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

      {loginError ? (
        <Wrapper option="Column" $width="363px">
          <Text size="small" $color="danger">
            {loginError}
          </Text>
        </Wrapper>
      ) : (
        <></>
      )}

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
