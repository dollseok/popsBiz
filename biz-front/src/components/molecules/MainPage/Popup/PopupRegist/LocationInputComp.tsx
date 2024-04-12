import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const LocationInputComp = () => {
  return (
    <>
      <Wrapper>
        <Text size="body1" $fontWeight="bold">
          장소 (Location)
        </Text>
        <Wrapper option="Row">
          <Wrapper>
            <Text size="body3">시/도</Text>
            <Input
              $inputsize="dateInput"
              type="text"
              placeholder="시/도를 선택해주세요."
            ></Input>
          </Wrapper>
          <Wrapper>
            <Text size="body3">시/구</Text>
            <Input
              $inputsize="dateInput"
              type="text"
              placeholder="시/구를 선택해주세요."
            ></Input>
          </Wrapper>
          <Wrapper>
            <Text size="body3">상세 주소</Text>
            <Input
              $inputsize="large"
              type="text"
              placeholder="상세 주소를 적어주세요."
            ></Input>
          </Wrapper>
        </Wrapper>
        <Button size="small">상세 주소</Button>
      </Wrapper>
    </>
  );
};

export default LocationInputComp;
