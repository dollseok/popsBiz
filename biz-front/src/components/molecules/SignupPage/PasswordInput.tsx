import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { signupInfoState } from '@/states/User';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const PasswordInput = () => {
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [validateFirstPassword, setValidateFirstPassword] =
    useState<boolean>(true);
  const [validateSecondPassword, setValidateSecondPassword] =
    useState<boolean>(true);

  const [signupInfo, setSignupInfo] = useRecoilState(signupInfoState);

  const handleCheckPassword = (p1: string, p2: string) => {
    console.log('p1', p1);
    console.log('p2', p2);
    if (p1 !== p2) {
      console.log('비번 틀림');
      setValidateSecondPassword(false);
    } else {
      console.log('비번 통과');
      setValidateSecondPassword(true);
      setSignupInfo(prev => ({ ...prev, password: p1 }));
    }
  };

  const onBlurFirstPassword = async (e: React.FocusEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFirstPassword(newPassword);
  };

  const onBlurSecondPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const checkPassword = e.target.value;
    setSecondPassword(checkPassword);
  };

  useEffect(() => {
    // 비밀번호 조건 확인
    if (firstPassword !== '') {
      const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      if (reg.test(firstPassword)) {
        console.log('첫번째 비번 좋아');
        setValidateFirstPassword(true);
      } else {
        console.log('첫번째 비번 노우');
        setValidateFirstPassword(false);
      }
    }

    // 비밀번호 일치 확인
    if (secondPassword !== '') {
      handleCheckPassword(firstPassword, secondPassword);
    }
  }, [firstPassword, secondPassword]);

  return (
    <>
      <Wrapper option="Column" $width="40rem">
        <Text size="body2" $marginBottom="15px">
          비밀번호
        </Text>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onBlur={onBlurFirstPassword}
        />
        <Text size="body4" $color="grey1">
          * 총 8 ~ 20자리의 영문/숫자/특수문자 중 2가지 이상을 포함하여
          입력하세요.
        </Text>
        {validateFirstPassword ? (
          <></>
        ) : (
          <Text $color="danger" size="body4">
            비밀번호를 조건에 맞추어 입력해주세요.
          </Text>
        )}

        <Text size="body2" $marginBottom="15px">
          비밀번호 확인
        </Text>
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          onBlur={onBlurSecondPassword}
        />

        {validateSecondPassword ? (
          <></>
        ) : (
          <Text $color="danger" size="body4">
            먼저 입력하신 비밀번호와 일치하지 않습니다.
          </Text>
        )}
      </Wrapper>
    </>
  );
};

export { PasswordInput };