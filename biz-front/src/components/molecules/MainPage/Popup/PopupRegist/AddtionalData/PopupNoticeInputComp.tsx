import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';
import { BsCaretRightFill, BsFillPlusCircleFill } from 'react-icons/bs';
import PopupNoticeAddModal from './PopupNoticeAddModal';
import { Box } from '@/components/atoms/Box/Box';

export interface popupNoticeDataType {
  title: string;
  content: string;
}

const PopupNoticeInputComp = () => {
  const [open, setOpen] = useState<boolean>(false);

  const tmp = { title: '임시데이터1', content: '임시데이터 내용1' };
  const [popupNoticeListData, setPopupNoticeListData] = useState<
    popupNoticeDataType[]
  >([tmp]);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const addPopupNoticeList = (data: popupNoticeDataType) => {
    setPopupNoticeListData(prev => {
      return [...prev, data];
    });
  };

  return (
    <>
      {open ? (
        <PopupNoticeAddModal
          setOpen={setOpen}
          addPopupNoticeList={addPopupNoticeList}
        />
      ) : (
        <></>
      )}
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          공지사항
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          각 종 유의사항, 변동사항 등 다양한 공지사항을 실시간으로 알려보세요.
        </Text>
        {/* 팝업 공지사항 데이터 */}
        {popupNoticeListData.map((item, idx) => {
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

export default PopupNoticeInputComp;
