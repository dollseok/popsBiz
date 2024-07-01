import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent, useState } from 'react';

const TicketBasicData = () => {
  // 티켓 유형
  const [usingFirst, setUsingFirst] = useState<boolean>(false);
  const [buyingFirst, setBuyingFirst] = useState<boolean>(false);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'using') {
      if (!usingFirst) {
        setBuyingFirst(false);
      }
      setUsingFirst(!usingFirst);
    } else if (e.target.id === 'buying') {
      if (!buyingFirst) {
        setUsingFirst(false);
      }
      setBuyingFirst(!buyingFirst);
    }
  };

  // 판매 수량

  // 1인당 구매 가능 수량
  const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [maxQuantityPerPerson, setMaxQuantityPerPerson] = useState<number>(1);

  // 비밀번호

  return (
    <>
      <Wrapper $marginBottom="30px" option="RowSideEnd">
        {/* 티켓 유형 */}
        <Wrapper option="Column">
          <Text
            $lineHeight="32px"
            size="body3"
            $fontWeight="bold"
            $marginBottom="14px"
          >
            티켓 유형
          </Text>
          <Wrapper $marginBottom="10px" option="Row">
            <Text size="body4">사용 선착순</Text>
            <input
              type="checkbox"
              id="using"
              name="using"
              checked={usingFirst}
              onChange={e => handleCheckbox(e)}
            ></input>
          </Wrapper>
          <Wrapper option="Row">
            <Text size="body4">구매 선착순</Text>
            <input
              type="checkbox"
              id="buying"
              name="buying"
              checked={buyingFirst}
              onChange={e => handleCheckbox(e)}
            ></input>
          </Wrapper>
        </Wrapper>

        {/* 판매 수량 */}
        <Wrapper>
          <Text
            $lineHeight="32px"
            size="body3"
            $fontWeight="bold"
            $marginBottom="10px"
          >
            판매 수량
          </Text>
          <Input
            type="text"
            $inputsize="ticketDataInput"
            placeholder="숫자 입력"
          ></Input>
        </Wrapper>

        {/* 1인당 구매 가능 수량 */}
        <Wrapper>
          <Text size="body4">1인당</Text>
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            구매 가능 수량
          </Text>
          <Dropdown
            selectData={quantityList}
            placeholder={'시작 시간'}
            content={'ticketDataInput'}
            setFn={setMaxQuantityPerPerson}
            value={maxQuantityPerPerson}
          />
        </Wrapper>

        {/* 비밀번호 */}
        <Wrapper>
          <Text
            $lineHeight="32px"
            size="body3"
            $fontWeight="bold"
            $marginBottom="10px"
          >
            비밀번호
          </Text>
          <Input
            type="text"
            $inputsize="ticketDataInput"
            placeholder="최소 4자리"
          ></Input>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default TicketBasicData;
