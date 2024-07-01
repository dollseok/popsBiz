import { Box } from '@/components/atoms/Box/Box';
import { useModalRef } from '@/hooks/useModalRef';
import { Dispatch, SetStateAction } from 'react';
import { ticketDataType } from './TicketInputComp';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { Text } from '@/components/atoms/Text/Text';
import Button from '@/components/atoms/Button/Button';
import { checkObjectBlank } from '@/utils/checkBlank';
import TicketBasicData from './TicketBasicData';
import TicketDateData from './TicketDateData';
import TicketTextData from './TicketTextData';

interface modalPropsType {
  setOpen: Dispatch<SetStateAction<boolean>>;
  addTicketList: (data: ticketDataType) => void;
}

const TicketAddModal = (props: modalPropsType) => {
  const { modalRef } = useModalRef({ setOpen: props.setOpen });

  const handleCancelClick = () => {
    props.setOpen(false);
  };

  const handleSaveClick = () => {
    // const newData = { title: noticeTitle, content: noticeContent };
    // if (!checkObjectBlank(newData)) {
    //   props.addPopupNoticeList(newData);
    //   props.setOpen(false);
    // }
  };

  return (
    <>
      <Box $option="sideModalBox" ref={modalRef}>
        <Text size="body1" $fontWeight="bold" $marginBottom="30px">
          티켓 등록
        </Text>
        <TicketBasicData />
        <TicketDateData />
        <TicketTextData />
        <Wrapper option="RowSideEnd">
          <Button size="medium" option="cancel" onClick={handleCancelClick}>
            취소
          </Button>
          <Button size="medium" onClick={handleSaveClick}>
            저장
          </Button>
        </Wrapper>
      </Box>
    </>
  );
};

export default TicketAddModal;
