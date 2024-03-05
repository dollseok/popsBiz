import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { passwordErrorState, signupInfoState } from '@/states/User';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

const PasswordInput = () => {
  // trim 완료되고 최종 변수
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  // 바뀔 때마다 체크하기 위한 임시 변수
  const [tmpFirstPassword, setTmpFirstPassword] = useState<string>('');
  const [tmpSecondPassword, setTmpSecondPassword] = useState<string>('');

  const [validateFirstPassword, setValidateFirstPassword] =
    useState<boolean>(true);
  const [firstPasswordErrorMessage, setFirstPasswordErrorMessage] =
    useState<string>('');

  // recoil
  const [passwordError, setPasswordError] = useRecoilState(passwordErrorState);
  const resetPasswordError = useResetRecoilState(passwordErrorState);
  const setSignupInfo = useSetRecoilState(signupInfoState);

  // function
  const handleCheckPassword = (p1: string, p2: string) => {
    if (p1 !== p2) {
      // 비밀번호 유효성 검사 실패
      setSignupInfo(prev => ({ ...prev, password: '' }));
      setPasswordError(prev => ({
        state: true,
        message: '비밀번호 확인란이 올바르지 않습니다.',
      })); // 상태만 체크
    } else {
      // 비밀번호 유효성 검사 통과
      setSignupInfo(prev => ({ ...prev, password: p1 }));
      resetPasswordError();
    }
  };

  const onChangeFirstPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedPassword = e.target.value.trim();
    console.log(trimmedPassword);
    setTmpFirstPassword(trimmedPassword);
  };

  const onChangeSecondPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedPassword = e.target.value.trim();
    console.log(trimmedPassword);
    setTmpSecondPassword(trimmedPassword);
  };

  const onBlurFirstPassword = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (tmpFirstPassword === '') {
      setPasswordError(prev => ({ ...prev, state: true }));
      setFirstPasswordErrorMessage('비밀번호를 입력해주세요');
      setValidateFirstPassword(false);
    }
    setFirstPassword(tmpFirstPassword);
  };

  const onBlurSecondPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    setSecondPassword(tmpSecondPassword);
  };

  // useEffect
  useEffect(() => {
    // 비밀번호 조건 확인
    if (firstPassword !== '') {
      const reg1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/; // 숫자 & 문자 & 특수문자
      const reg2 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/; // 문자 & 숫자
      const reg3 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,20}$/; // 문자 & 특수문자
      const reg4 = /^(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/; // 숫자 & 특수문자
      // 넷 중 하나만 만족하면 통과
      if (
        reg1.test(firstPassword) ||
        reg2.test(firstPassword) ||
        reg3.test(firstPassword) ||
        reg4.test(firstPassword)
      ) {
        setValidateFirstPassword(true);
      } else {
        setValidateFirstPassword(false);
        setFirstPasswordErrorMessage(
          '비밀번호 형식에 맞지 않습니다. 형식을 다시 확인해주세요.'
        );
      }
    }

    // 비밀번호 일치 확인
    if (secondPassword !== '') {
      handleCheckPassword(firstPassword, secondPassword);
    }
  }, [firstPassword, secondPassword]);

  return (
    <>
      <Wrapper option="Column" $width="40rem" $marginBottom="20px">
        <Text size="body2" $marginBottom="15px">
          비밀번호
        </Text>
        <Input
          type="password"
          value={tmpFirstPassword}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangeFirstPassword}
          onBlur={onBlurFirstPassword}
          $marginBottom="10px"
        />
        <Text size="body4" $color="grey1" $marginBottom="10px">
          * 총 8 ~ 20자리의 영문/숫자/특수문자 중 2가지 이상을 포함하여
          입력하세요.
        </Text>

        {validateFirstPassword ? (
          <></>
        ) : (
          <Text $color="danger" size="body4" $marginLeft="10px">
            {firstPasswordErrorMessage}
          </Text>
        )}
      </Wrapper>
      <Wrapper option="Column" $width="40rem" $marginBottom="40px">
        <Text size="body2" $marginBottom="15px">
          비밀번호 확인
        </Text>
        <Input
          type="password"
          value={tmpSecondPassword}
          placeholder="비밀번호를 다시 입력해주세요"
          onBlur={onBlurSecondPassword}
          onChange={onChangeSecondPassword}
          $marginBottom="10px"
        />

        {passwordError.state ? (
          <Text $color="danger" size="body4" $marginLeft="10px">
            {passwordError.message}
          </Text>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export { PasswordInput };
