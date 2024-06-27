import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent } from 'react';

const ReserveLinkInputComp = () => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body4" $marginBottom="5px">
          대표 예약 링크
        </Text>
        <Input
          type="text"
          $inputsize="fullSize"
          placeholder="https://"
          onChange={e => {
            handleTextChange(e);
          }}
        />
      </Wrapper>
    </>
  );
};

export default ReserveLinkInputComp;
