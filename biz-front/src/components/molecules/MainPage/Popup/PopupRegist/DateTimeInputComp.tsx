import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const DateTimeInputComp = () => {
  return (
    <>
      <Wrapper>
        <Text size="body1" $fontWeight="bold">
          기간 / 시간 (Date and Time)
        </Text>
        <Wrapper option="Row">
          <Wrapper>
            <Text size="body3">시작일</Text>
            <Input $inputsize="dateSize" type="date"></Input>
          </Wrapper>
          <Wrapper>
            <Text size="body3">마감일</Text>
            <Input $inputsize="dateSize" type="date"></Input>
          </Wrapper>
          <Wrapper>
            <Text size="body3">운영시간</Text>
            <Wrapper option="Row">
              <Input
                $inputsize="extraSmall"
                type="text"
                placeholder="시작 시간"
              ></Input>
              <Input
                $inputsize="extraSmall"
                type="text"
                placeholder="종료 시간"
              ></Input>
            </Wrapper>
          </Wrapper>
          <Button option="blueTextButton" size="textSize">
            상세 설정
          </Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default DateTimeInputComp;
