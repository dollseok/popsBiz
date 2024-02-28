import { useCheckNickname } from '@/apis/User/Mutations/useCheckNickname';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { nicknameErrorState, nicknamePassState } from '@/states/User';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const NicknameInput = () => {
  const [nickname, setNickname] = useState('');
  //recoil
  const [nicknameError, setNicknameError] = useRecoilState(nicknameErrorState);
  const [nicknamePass, setNicknamePass] = useRecoilState(nicknamePassState);

  // api
  const checkNicknameMutation = useCheckNickname();

  // function
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNicknamePass(false);
    const onlyEngNumResult = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(
      newNickname
    );
    const lengthReg = /^.{2,10}$/.test(newNickname);

    setNickname(newNickname);
    if (!lengthReg) {
      setNicknameError({
        state: true,
        message: '닉네임은 2-10자 이내로 입력해야 합니다.',
      });
    } else if (onlyEngNumResult) {
      setNicknameError({
        state: true,
        message: '닉네임은 영문,한글,숫자만 입력 가능합니다.',
      });
    } else {
      // 둘다 통과 되었을 때
      console.log('둘다 통과');
      setNicknameError({
        state: true,
        message: '',
      });
      setNickname(newNickname);
    }
  };

  const handleCheckNicknameClick = () => {
    console.log(nickname);
    if (nicknameError.message === '') {
      checkNicknameMutation.mutate(nickname);
    }
  };

  return (
    <>
      <Wrapper option="Column" $marginBottom="20px">
        <Text size="body2" $marginBottom="15px">
          닉네임
        </Text>
        <Wrapper option="RowSideEnd" $marginBottom="10px">
          <Input
            type="text"
            placeholder="기업 또는 브랜드명"
            onChange={e => {
              handleNicknameChange(e);
            }}
          />
          <Button size="small" onClick={handleCheckNicknameClick}>
            중복 확인
          </Button>
        </Wrapper>

        <Text size="body4" $color="grey1" $marginBottom="10px">
          * 소비자에게 노출되는 내용으로 신중하게 작성해주시기 바랍니다.
        </Text>

        {nicknamePass ? (
          <Text $color="blue" size="body4" $marginLeft="10px">
            중복 확인 완료
          </Text>
        ) : (
          <></>
        )}

        <Text $color="danger" size="body4" $marginLeft="10px">
          {nicknameError.message}
        </Text>
      </Wrapper>
    </>
  );
};

export { NicknameInput };
