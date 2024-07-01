import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent, useState } from 'react';

const TicketTextData = () => {
  const [ticketTitle, setTicketTitle] = useState<string>('');
  const [ticketDetail, setTicketDetail] = useState<string>('');
  const [ticketCaution, setTicketCaution] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setTicketTitle(inputData);
  };

  const handleDetailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setTicketDetail(inputData);
  };

  const handleCautionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setTicketCaution(inputData);
  };

  return (
    <>
      <Wrapper $marginBottom="20px">
        {/* 제목 */}
        <Wrapper $marginBottom="15px">
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            제목
          </Text>
          <Input
            type="text"
            $inputsize="fullSize"
            placeholder="글자를 입력해주세요"
            onChange={e => {
              handleTitleChange(e);
            }}
          />
          <Text size="body3">{ticketTitle.length}/100</Text>
        </Wrapper>
        {/* 상세 정보 */}
        <Wrapper $marginBottom="15px">
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            상세 정보
          </Text>
          <Textarea
            $height="150px"
            $width="100%"
            $placeholder="글자를 입력해주세요"
            onChange={e => {
              handleDetailChange(e);
            }}
          />
          <Text size="body3">{ticketDetail.length}/500</Text>
        </Wrapper>
        {/* 이용 시 주의사항 */}
        <Wrapper $marginBottom="15px">
          <Text size="body3" $fontWeight="bold" $marginBottom="10px">
            이용 시 주의사항
          </Text>
          <Textarea
            $height="130px"
            $width="100%"
            $placeholder="글자를 입력해주세요"
            onChange={e => {
              handleCautionChange(e);
            }}
          />
          <Text size="body3">{ticketCaution.length}/500</Text>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default TicketTextData;
