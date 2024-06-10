import { Box } from '@/components/atoms/Box/Box';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useModalRef } from '@/hooks/useModalRef';
import { Dispatch, SetStateAction, useState } from 'react';
import { eventDataType } from './EventInputComp';
import { checkObjectBlank } from '@/utils/checkBlank';

interface modalPropsType {
  setOpen: Dispatch<SetStateAction<boolean>>;
  addEventList: (data: eventDataType) => void;
}

const EventAddModal = (props: modalPropsType) => {
  const { modalRef } = useModalRef({ setOpen: props.setOpen });

  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventContent, setEventContent] = useState<string>('');

  const handleCancelClick = () => {
    props.setOpen(false);
  };

  const handleEventTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setEventTitle(inputData);
  };

  const handleEventContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setEventContent(inputData);
  };

  const handleSaveClick = () => {
    const newData = { title: eventTitle, content: eventContent };
    if (!checkObjectBlank(newData)) {
      props.addEventList(newData);
      props.setOpen(false);
    }
  };

  return (
    <>
      <Box $option="sideModalBox" ref={modalRef}>
        <Wrapper>
          <Text size="body1" $fontWeight="bold" $marginBottom="45px">
            이벤트
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
                handleEventTitleChange(e);
              }}
            />
            <Wrapper option="Flex" $marginTop="5px">
              <Text size="body3" $marginLeft="auto">
                {eventTitle.length}/100
              </Text>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Text size="body3" $fontWeight="bold" $marginBottom="10px">
              상세내용
            </Text>
            <Textarea
              $width="100%"
              $height="350px"
              $placeholder="이벤트 내용을 입력해주세요."
              onChange={e => {
                handleEventContentChange(e);
              }}
            />
            <Wrapper option="Flex" $marginTop="5px">
              <Text size="body3" $marginLeft="auto">
                {eventContent.length}/1,500
              </Text>
            </Wrapper>
          </Wrapper>
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

export default EventAddModal;
