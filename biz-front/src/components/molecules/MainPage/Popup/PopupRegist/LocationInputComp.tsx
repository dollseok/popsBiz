import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import mapImage from '@/assets/images/map-draw.png';

const LocationInputComp = () => {
  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="15px">
          장소 (Location)
        </Text>
        <Wrapper option="Row">
          <Wrapper $marginRight="10px">
            <Text size="body3">시/도</Text>
            <Input
              $marginTop="5px"
              $inputsize="dateInput"
              type="text"
              placeholder="시/도를 선택해주세요."
            ></Input>
          </Wrapper>
          <Wrapper $marginRight="10px">
            <Text size="body3">시/구</Text>
            <Input
              $marginTop="5px"
              $inputsize="dateInput"
              type="text"
              placeholder="시/구를 선택해주세요."
            ></Input>
          </Wrapper>
          <Wrapper $marginRight="10px">
            <Text size="body3">상세 주소</Text>
            <Input
              $marginTop="5px"
              $inputsize="large"
              type="text"
              placeholder="상세 주소를 적어주세요."
            ></Input>
          </Wrapper>
        </Wrapper>
        <Wrapper option="Flex" $width="795px">
          <Button
            $marginLeft="auto"
            $marginTop="10px"
            $fontSize="12px"
            size="blackButton"
            option="blackButton"
          >
            <Image src={mapImage} $unit="px" $margin="3px" />
            위치 확인
          </Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default LocationInputComp;
