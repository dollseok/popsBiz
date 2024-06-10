import { Box } from '@/components/atoms/Box/Box';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import TuiEditor from '@/components/atoms/TuiEditor/TuiEditor';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useModalRef } from '@/hooks/useModalRef';
import { Dispatch, SetStateAction, useState } from 'react';
import { popupNoticeDataType } from './PopupNoticeInputComp';
import { checkObjectBlank } from '@/utils/checkBlank';

interface modalPropsType {
  setOpen: Dispatch<SetStateAction<boolean>>;
  addPopupNoticeList: (data: popupNoticeDataType) => void;
}

const PopupNoticeAddModal = (props: modalPropsType) => {
  const { modalRef } = useModalRef({ setOpen: props.setOpen });

  const [noticeTitle, setNoticeTitle] = useState<string>('');
  const [noticeContent, setNoticeContent] = useState<string>(' '); // Tui Editor사용을 위해 ' ' 초기 값 사용

  const handleCancelClick = () => {
    props.setOpen(false);
  };

  const handleNoticeTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setNoticeTitle(inputData);
  };

  const handleSaveClick = () => {
    const newData = { title: noticeTitle, content: noticeContent };
    if (!checkObjectBlank(newData)) {
      props.addPopupNoticeList(newData);
      props.setOpen(false);
    }
  };

  return (
    <>
      <Box $option="sideModalBox" ref={modalRef}>
        <Wrapper>
          <Text size="body1" $fontWeight="bold" $marginBottom="45px">
            공지 사항
          </Text>
          <Wrapper $marginBottom="25px">
            <Text size="body3" $fontWeight="bold" $marginBottom="10px">
              제목
            </Text>
            <Input
              type="text"
              $inputsize="fullSize"
              placeholder="제목을 입력해주세요."
              onChange={e => {
                handleNoticeTitleChange(e);
              }}
            />
            <Wrapper option="Flex" $marginTop="5px">
              <Text size="body3" $marginLeft="auto">
                {noticeTitle.length}/100
              </Text>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Text size="body3" $fontWeight="bold" $marginBottom="10px">
              상세내용
            </Text>
          </Wrapper>
          <TuiEditor data={noticeContent} setFn={setNoticeContent} />
        </Wrapper>
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

export default PopupNoticeAddModal;
