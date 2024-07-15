import { useCheckNickname } from '@/apis/User/Mutations/useCheckNickname';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { profileNameErrorState, profileNamePassState } from '@/states/User';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const NicknameInput = () => {
  const [profileName, setProfileName] = useState('');
  //recoil
  const [profileNameError, setProfileNameError] = useRecoilState(
    profileNameErrorState
  );
  const [profileNamePass, setProfileNamePass] =
    useRecoilState(profileNamePassState);

  // api
  const checkNicknameMutation = useCheckNickname();

  // function
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProfileName = e.target.value;
    setProfileNamePass(false);
    const onlyEngNumResult = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(
      newProfileName
    );
    const lengthReg = /^.{2,10}$/.test(newProfileName);

    setProfileName(newProfileName);
    if (!lengthReg) {
      setProfileNameError({
        state: true,
        message: '닉네임은 2-10자 이내로 입력해야 합니다.',
      });
    } else if (onlyEngNumResult) {
      setProfileNameError({
        state: true,
        message: '닉네임은 영문,한글,숫자만 입력 가능합니다.',
      });
    } else {
      // 둘다 통과 되었을 때
      console.log('둘다 통과');
      setProfileNameError({
        state: true,
        message: '',
      });
      setProfileName(newProfileName);
    }
  };

  const handleCheckNicknameClick = () => {
    console.log(profileName);
    if (profileNameError.message === '') {
      checkNicknameMutation.mutate(profileName);
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

        {profileNamePass ? (
          <Text $color="blue" size="body4" $marginLeft="10px">
            중복 확인 완료
          </Text>
        ) : (
          <></>
        )}

        <Text $color="danger" size="body4" $marginLeft="10px">
          {profileNameError.message}
        </Text>
      </Wrapper>
    </>
  );
};

export { NicknameInput };
