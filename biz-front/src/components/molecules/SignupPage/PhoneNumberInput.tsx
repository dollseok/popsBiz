import useCertPhoneNum from '@/apis/User/Mutations/useCertPhoneNum';
import useSendText from '@/apis/User/Mutations/useSendText';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import {
  messageSentState,
  phoneNumberErrorState,
  phoneNumberState,
} from '@/states/User';
import { Timer } from '@/utils/Timer';
import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>(['', '', '']);
  const [authCode, setAuthCode] = useState<string>('');
  // const [resetTimer, setResetTimer] = useState<boolean>(false); // 타이머 리셋 신호
  // const [messageSent, setMessageSent] = useState<boolean>(false);

  const phoneNum1 = useRef<HTMLInputElement>(null);
  const phoneNum2 = useRef<HTMLInputElement>(null);
  const phoneNum3 = useRef<HTMLInputElement>(null);

  // recoil
  const [messageSent, setMessageSent] = useRecoilState(messageSentState);
  const phoneNumberCert = useRecoilValue(phoneNumberState);
  // const phoneNumberError = useRecoilValue(phoneNumberErrorState);///
  const [phoneNumberError, setPhoneNumberError] = useRecoilState(
    phoneNumberErrorState
  );

  // api
  const sendTextMutation = useSendText();
  const certPhoneNumMutation = useCertPhoneNum();

  //function
  // 핸드폰 번호 설정
  const handlePhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const newNumber = e.target.value.replace(/[^0-9]/g, ''); // 숫자 제외 입력 x

    // 핸드폰 번호 변수 설정
    setPhoneNumber(prev => {
      if (idx === 0 && newNumber.length === 4) {
        return prev;
      } else if ((idx === 1 || idx === 2) && newNumber.length === 5) {
        return prev;
      } else {
        const newPhoneNumber = [...prev];
        newPhoneNumber[idx] = newNumber;
        return newPhoneNumber;
      }
    });

    // 포커스 이동
    if (idx === 0 && newNumber.length === 3) {
      phoneNum2.current?.focus();
    } else if ((idx === 1 || idx === 2) && newNumber.length === 4) {
      phoneNum3.current?.focus();
    }
  };

  const handleCertCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthCode = e.target.value;
    setAuthCode(newAuthCode);
  };

  const handleSendTextClick = () => {
    const fullNumber = phoneNumber[0] + phoneNumber[1] + phoneNumber[2];

    console.log(fullNumber);
    // 전화번호는 무조건 10 자리수
    if (fullNumber.length !== 11) {
      setPhoneNumberError({
        state: true,
        message: '전화번호가 올바르지 않습니다.',
      });
    } else {
      setMessageSent(!messageSent);
      sendTextMutation.mutate({ phoneNumber: fullNumber });
    }
  };

  const handleCertPhoneNumberClick = () => {
    const messageId = sessionStorage.getItem('textMessageId');
    const fullNumber = phoneNumber[0] + phoneNumber[1] + phoneNumber[2];
    certPhoneNumMutation.mutate({ info: fullNumber, authCode, messageId });
  };

  return (
    <>
      <Wrapper option="Column" $marginBottom="20px">
        <Text size="body2" $marginBottom="15px">
          핸드폰 번호 인증
        </Text>
        <Wrapper option="RowSideEnd" $marginBottom="10px">
          <Wrapper option="RowSideEnd" $width="424px">
            <Input
              type="text"
              $inputsize="phoneNumberInput"
              value={phoneNumber[0]}
              ref={phoneNum1}
              onChange={e => {
                handlePhoneNumberChange(e, 0);
              }}
            />
            <Input
              type="text"
              $inputsize="phoneNumberInput"
              value={phoneNumber[1]}
              ref={phoneNum2}
              onChange={e => {
                handlePhoneNumberChange(e, 1);
              }}
            />
            <Input
              type="text"
              $inputsize="phoneNumberInput"
              value={phoneNumber[2]}
              ref={phoneNum3}
              onChange={e => {
                handlePhoneNumberChange(e, 2);
              }}
            />
          </Wrapper>
          <Button
            size="small"
            onClick={() => {
              handleSendTextClick();
            }}
            option={phoneNumberCert ? 'deactivated' : 'activated'}
          >
            인증 번호 전송
          </Button>
        </Wrapper>

        {/* 인증 번호 입력 칸 */}
        {messageSent ? (
          <>
            <Wrapper option="Row" $marginBottom="20px">
              <Input
                type="text"
                $inputsize="small"
                placeholder="인증코드 입력"
                onChange={handleCertCodeChange}
              />
              <Timer resetTimer={messageSent} />
              <Button
                $marginLeft="20px"
                size="small"
                onClick={handleCertPhoneNumberClick}
              >
                인증하기
              </Button>
            </Wrapper>
          </>
        ) : (
          <></>
        )}
        {/* 핸드폰 번호 인증 에러 메세지 */}
        {phoneNumberError.state ? (
          <Text $color="danger" size="body4" $marginLeft="10px">
            {phoneNumberError.message}
          </Text>
        ) : (
          <></>
        )}

        {/* 핸드폰 번호 인증 성공 메세지*/}
        {phoneNumberCert ? (
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

export default PhoneNumberInput;
