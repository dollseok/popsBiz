import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import EventAddModal from './EventAddModal';

export interface eventDataType {
  title: string;
  content: string;
}

const EventInputComp = () => {
  const tmp = { title: '', content: '' };
  const [eventListData, setEventListData] = useState<eventDataType[]>([tmp]);

  const [open, setOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? <EventAddModal setOpen={setOpen} /> : <></>}
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          이벤트
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          팝업에서 진행되는 이벤트들을 통해 소비자들의 관심을 높여보세요.
        </Text>
        <Button option="border" $width="100%" onClick={handleButtonClick}>
          <BsFillPlusCircleFill color="grey" size={30} />
        </Button>
      </Wrapper>
    </>
  );
};

export default EventInputComp;
