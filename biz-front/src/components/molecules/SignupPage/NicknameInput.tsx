import { useCheckNickname } from '@/apis/User/Mutations/useCheckNickname';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import React, { useState } from 'react';

const NicknameInput = () => {
  const [nickname, setNickname] = useState('');

  const checkNicknameMutation = useCheckNickname();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
  };

  const handleCheckNicknameClick = () => {
    console.log(nickname);
    checkNicknameMutation.mutate(nickname);
  };

  return (
    <>
      <Text size="body2" $marginBottom="15px">
        닉네임
      </Text>
      <Wrapper option="Row">
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

      <Text size="body4" $color="grey1">
        * 소비자에게 노출되는 내용으로 신중하게 작성해주시기 바랍니다.
      </Text>

      <Text $color="danger" size="body4">
        닉네임 유효성 오류 시 메세지 표시
      </Text>
    </>
  );
};

export { NicknameInput };
