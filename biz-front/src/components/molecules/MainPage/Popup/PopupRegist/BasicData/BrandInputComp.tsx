import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

const BrandInputComp = () => {
  const [brand, setBrand] = useState<string>('');

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setBrand(inputData);
  };

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold">
          브랜드명 (Brand)
        </Text>
        <Text size="body4" $color="grey1">
          소비자들이 쉽게 검색할 수 있도록 해당 팝업에 참여하는 모든 기업(또는
          개인)을 작성해주세요.
        </Text>
        <Input
          type="text"
          $inputsize="fullSize"
          placeholder="예시: 팝스, 인스타툰(instatoon)"
          onChange={e => {
            handleBrandChange(e);
          }}
        />
        <Text size="body3">{brand.length}/100</Text>
      </Wrapper>
    </>
  );
};

export default BrandInputComp;
