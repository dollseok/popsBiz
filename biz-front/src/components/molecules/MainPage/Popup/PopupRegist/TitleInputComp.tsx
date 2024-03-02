import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

const TitleInputComp = () => {
  const [popupTitle, setPopupTitle] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setPopupTitle(inputData);
  };

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold">
          팝업 명칭 (Title)
        </Text>
        <Input
          type="text"
          $inputsize="extraLarge"
          placeholder="글자를 입력해주세요."
          onChange={e => {
            handleTitleChange(e);
          }}
        />
        <Text size="body3">{popupTitle.length}/100</Text>
      </Wrapper>
    </>
  );
};

export default TitleInputComp;
