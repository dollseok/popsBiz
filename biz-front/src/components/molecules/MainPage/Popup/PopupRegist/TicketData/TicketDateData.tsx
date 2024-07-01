import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { TIME_LIST } from '@/constants/defaultTimeData';
import { useState } from 'react';

const TicketDateData = () => {
  const timeList = TIME_LIST;

  const [sellingStartTime, setSellingStartTime] = useState<string>('');
  const [sellingEndTime, setSellingEndTime] = useState<string>('');
  const [usingStartTime, setUsingStartTime] = useState<string>('');
  const [usingEndTime, setUsingEndTime] = useState<string>('');

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Wrapper $marginBottom="30px" option="RowSideEnd">
        {/* 판매 기간 */}
        <Wrapper $marginRight="13px">
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            판매기간
          </Text>
          <Text size="body4">시작일</Text>
          <Wrapper option="Row">
            <Input
              $inputsize="ticketDateInput"
              type="date"
              onChange={e => {
                handleDate(e);
              }}
            ></Input>
            <Dropdown
              selectData={timeList}
              placeholder="00:00"
              content={'ticketTimeInput'}
              setFn={setSellingStartTime}
              value={sellingStartTime}
              $top="25px"
            />
          </Wrapper>

          <Wrapper>
            <Text size="body4">마감일</Text>
            <Wrapper option="Row">
              <Input
                $inputsize="ticketDateInput"
                type="date"
                onChange={e => {
                  handleDate(e);
                }}
              ></Input>
              <Dropdown
                selectData={timeList}
                placeholder="24:00"
                content={'ticketTimeInput'}
                setFn={setSellingEndTime}
                value={sellingEndTime}
                $top="25px"
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* 사용 기간 */}
        <Wrapper>
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            사용기간
          </Text>
          <Wrapper>
            <Text size="body4">시작일</Text>
            <Wrapper option="Row">
              <Input
                $inputsize="ticketDateInput"
                type="date"
                onChange={e => {
                  handleDate(e);
                }}
              ></Input>
              <Dropdown
                selectData={timeList}
                placeholder="00:00"
                content={'ticketTimeInput'}
                setFn={setUsingStartTime}
                value={usingStartTime}
                $top="25px"
              />
            </Wrapper>
          </Wrapper>

          <Wrapper>
            <Text size="body4">마감일</Text>
            <Wrapper option="Row">
              <Input
                $inputsize="ticketDateInput"
                type="date"
                onChange={e => {
                  handleDate(e);
                }}
              ></Input>
              <Dropdown
                selectData={timeList}
                placeholder="24:00"
                content={'ticketTimeInput'}
                setFn={setUsingEndTime}
                value={usingEndTime}
                $top="25px"
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default TicketDateData;
