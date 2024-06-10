import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import PopupNoticeAddModal from './PopupNoticeAddModal';

const PopupNoticeInputComp = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? <PopupNoticeAddModal setOpen={setOpen} /> : <></>}
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          공지사항
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          각 종 유의사항, 변동사항 등 다양한 공지사항을 실시간으로 알려보세요.
        </Text>
        <Button option="border" $width="100%" onClick={handleButtonClick}>
          <BsFillPlusCircleFill color="grey" size={30} />
        </Button>
      </Wrapper>
    </>
  );
};

export default PopupNoticeInputComp;
