import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';
import { BsFillPlusCircleFill, BsCaretRightFill } from 'react-icons/bs';
import EventAddModal from './EventAddModal';
import { Box } from '@/components/atoms/Box/Box';

export interface eventDataType {
  title: string;
  content: string;
}

const EventInputComp = () => {
  const tmp = { title: '임시데이터1', content: '임시데이터 내용1' };
  const [eventListData, setEventListData] = useState<eventDataType[]>([tmp]);

  const [open, setOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const addEventList = (data: eventDataType) => {
    setEventListData(prev => {
      return [...prev, data];
    });
  };

  return (
    <>
      {open ? (
        <EventAddModal setOpen={setOpen} addEventList={addEventList} />
      ) : (
        <></>
      )}
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          이벤트
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          팝업에서 진행되는 이벤트들을 통해 소비자들의 관심을 높여보세요.
        </Text>
        {/* 이벤트 리스트 */}
        {eventListData.map((item, idx) => {
          return (
            <Box $option="borderBox" key={idx}>
              <Text size="body1">{item.title}</Text>
              <BsCaretRightFill size={30} />
            </Box>
          );
        })}
        <Button option="border" $width="100%" onClick={handleButtonClick}>
          <BsFillPlusCircleFill color="grey" size={30} />
        </Button>
      </Wrapper>
    </>
  );
};

export default EventInputComp;
