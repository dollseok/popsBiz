import { useCertEmail } from '@/apis/User/Mutations/useCertEmail';
import { useSendEmail } from '@/apis/User/Mutations/useSendEmail';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

const EmailInput = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');
  const [emailInputDisabled, setEmailInputDisabled] = useState<boolean>(true);
  const [authCode, setAuthCode] = useState<string>('');

  const sendEmailMutation = useSendEmail();
  const certEmailMutation = useCertEmail();

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    setTargetEmail(newUserId);
  };

  const handleCertCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthCode = e.target.value;
    setAuthCode(newAuthCode);
  };

  const handleSendEmailClick = () => {
    sendEmailMutation.mutate({ targetEmail });
  };

  const handleCertEmailClick = () => {
    const sendId = sessionStorage.getItem('sendId');
    certEmailMutation.mutate({ targetEmail, authCode, sendId });
  };

  return (
    <>
      <Wrapper option="Column" $width="40rem">
        <Text
          size="heading"
          $marginBottom="57px"
          $marginRight="auto"
          $fontWeight="bold"
        >
          회원가입
        </Text>
        <Text size="body2" $marginBottom="15px">
          아이디(이메일)
        </Text>
        <Wrapper option="Row">
          <Input
            type="text"
            placeholder="ex)pops@example.com"
            onChange={e => {
              handleUserIdChange(e);
            }}
            disabled={emailInputDisabled}
          />
          <Button size="small" onClick={handleSendEmailClick}>
            인증 메일 보내기
          </Button>
        </Wrapper>

        <Wrapper option="Row">
          <Input
            type="text"
            $inputsize="small"
            placeholder="인증코드 입력"
            onChange={handleCertCodeChange}
          />
          {/* <timer></timer> */}
          <Button size="small" onClick={handleCertEmailClick}>
            이메일 인증
          </Button>
        </Wrapper>
        <Text size="body4" $color="grey1">
          * 실제로 사용하시는 이메일로 기입해주시기 바랍니다.
          <br />* 중요한 공지사항 및 알림 등을 보내드립니다.
        </Text>

        <Text $color="danger" size="body4">
          여기에다 에러메시지
        </Text>
      </Wrapper>
    </>
  );
};

export { EmailInput };
