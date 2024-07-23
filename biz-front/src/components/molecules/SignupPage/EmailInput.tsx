import { useCertEmail } from '@/apis/User/Mutations/useCertEmail';
import { useSendEmail } from '@/apis/User/Mutations/useSendEmail';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { emailCertState, emailErrorState, emailSentState } from '@/states/User';
import { Timer } from '@/utils/Timer';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const EmailInput = () => {
  const [email, setEmail] = useState<string>('ex)pops@example.com');
  const [authCode, setAuthCode] = useState<string>('');
  // const [resetTimer, setResetTimer] = useState<boolean>(false); // 타이머 리셋 신호

  // recoil
  // const timer = useRecoilValue(timerState);
  const [emailSent, setEmailSent] = useRecoilState(emailSentState);
  const emailCert = useRecoilValue(emailCertState);
  const emailError = useRecoilValue(emailErrorState);

  //api
  const sendEmailMutation = useSendEmail();
  const certEmailMutation = useCertEmail();

  //function
  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    setEmail(newUserId);
  };

  const handleCertCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthCode = e.target.value;
    setAuthCode(newAuthCode);
  };

  const handleSendEmailClick = () => {
    setEmailSent(!emailSent);
    sendEmailMutation.mutate({ email });
  };

  const handleCertEmailClick = () => {
    const messageId = sessionStorage.getItem('emailMessageId');
    certEmailMutation.mutate({ info: email, authCode, messageId });
  };

  return (
    <>
      <Wrapper option="Column" $width="40rem" $marginBottom="20px">
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
        <Wrapper option="RowSideEnd" $marginBottom="20px">
          <Input
            type="text"
            placeholder={email}
            onChange={e => {
              handleUserIdChange(e);
            }}
            disabled={emailCert}
          />
          <Button
            $marginLeft="20px"
            size="small"
            onClick={handleSendEmailClick}
            option={emailCert ? 'deactivated' : 'activated'}
          >
            인증 메일 보내기
          </Button>
        </Wrapper>

        {emailSent ? (
          <>
            <Wrapper option="Row" $marginBottom="20px">
              <Input
                type="text"
                $inputsize="small"
                placeholder="인증코드 입력"
                onChange={handleCertCodeChange}
              />
              <Timer resetTimer={emailSent} />
              <Button
                $marginLeft="20px"
                size="small"
                onClick={handleCertEmailClick}
              >
                이메일 인증
              </Button>
            </Wrapper>
          </>
        ) : (
          <></>
        )}
        <Text size="body4" $color="grey1" $marginBottom="10px">
          * 실제로 사용하시는 이메일로 기입해주시기 바랍니다.
          <br />* 중요한 공지사항 및 알림 등을 보내드립니다.
        </Text>
        {emailError.state ? (
          <Text $color="danger" size="body4" $marginLeft="10px">
            {emailError.message}
          </Text>
        ) : (
          <></>
        )}
        {emailCert ? (
          <Text $color="blue" size="body4" $marginLeft="10px">
            인증 완료
          </Text>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export { EmailInput };
