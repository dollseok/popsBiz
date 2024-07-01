import { Box } from '@/components/atoms/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import TicketAddModal from './TicketAddModal';
import TicketComp from './TicketComp';

export interface ticketDataType {
  type: string;
  title: string;
  currentQuantity: number;
  totalQuantity: number;
  price: string;
  saleState: string;
}

const TicketInputComp = () => {
  const tmpTicket = {
    type: '일반',
    title: '제목1',
    currentQuantity: 0,
    totalQuantity: 100,
    price: '1000원',
    saleState: '영업중',
  };
  const [ticketList, setTicketList] = useState<ticketDataType[]>([tmpTicket]);
  const [open, setOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const addTicketList = (data: ticketDataType) => {
    setTicketList(prev => {
      return [...prev, data];
    });
  };

  return (
    <>
      {open ? (
        <TicketAddModal setOpen={setOpen} addTicketList={addTicketList} />
      ) : (
        <></>
      )}
      <Wrapper $marginBottom="40px">
        <Text size="subtitle" $fontWeight="bold" $marginBottom="5px">
          티켓
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          여기에 티켓에 대한 설명이 들어갈 예정입니다.
        </Text>
        <Wrapper option="TicketNavRow">
          <Box $option="ticketBox">
            <Text size="body3" $fontWeight="bold">
              종류
            </Text>
          </Box>
          <Box $option="ticketBox">
            <Text size="body3" $fontWeight="bold">
              제목
            </Text>
          </Box>
          <Box $option="ticketBox">
            <Text size="body3" $fontWeight="bold">
              수량
            </Text>
          </Box>
          <Box $option="ticketBox">
            <Text size="body3" $fontWeight="bold">
              가격
            </Text>
          </Box>
          <Box $option="ticketBox">
            <Text size="body3" $fontWeight="bold">
              티켓 상태
            </Text>
          </Box>
          <Box $option="ticketBox"></Box>
        </Wrapper>
        {ticketList.map((data, idx) => (
          <TicketComp ticketData={data} key={idx} />
        ))}
        <Button option="border" $width="100%" onClick={handleButtonClick}>
          <BsFillPlusCircleFill color="grey" size={30} />
        </Button>
      </Wrapper>
    </>
  );
};

export default TicketInputComp;
