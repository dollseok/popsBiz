import { useCertEmail } from '@/apis/User/Mutations/useCertEmail';
import { useSendEmail } from '@/apis/User/Mutations/useSendEmail';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import {
  emailCertState,
  emailErrorMentionState,
  timerState,
} from '@/states/User';
import { Timer } from '@/utils/Timer';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const EmailInput = () => {
  const [targetEmail, setTargetEmail] = useState<string>('ex)pops@example.com');
  const [authCode, setAuthCode] = useState<string>('');
  const [resetTimer, setResetTimer] = useState<boolean>(false); // 타이머 리셋 신호

  const timer = useRecoilValue(timerState);
  const emailCert = useRecoilValue(emailCertState);
  const emailErrorMention = useRecoilValue(emailErrorMentionState);

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
    setResetTimer(!resetTimer);
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
        <Wrapper option="Row" $marginBottom="20px">
          <Input
            type="text"
            placeholder={targetEmail}
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

        {timer ? (
          <>
            <Wrapper option="Row" $marginBottom="20px">
              <Input
                type="text"
                $inputsize="small"
                placeholder="인증코드 입력"
                onChange={handleCertCodeChange}
              />
              <Timer resetTimer={resetTimer} />
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
        {emailErrorMention === '' ? (
          <></>
        ) : (
          <Text
            $color="danger"
            size="body4"
            $marginLeft="10px"
            $marginBottom="20px"
          >
            {emailErrorMention}
          </Text>
        )}
        {emailCert ? (
          <Text
            $color="blue"
            size="body4"
            $marginLeft="10px"
            $marginBottom="20px"
          >
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
