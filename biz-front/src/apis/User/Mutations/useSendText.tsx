import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { SendTextInfoType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { sendText } from '../userAPI';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { messageSentState, phoneNumberErrorState } from '@/states/User';

const useSendText = () => {
  const setMessageSent = useSetRecoilState(messageSentState);
  const setPhoneNumberError = useSetRecoilState(phoneNumberErrorState);
  const resetPhoneNumberError = useResetRecoilState(phoneNumberErrorState);

  return useMutation<apiSuccessType, apiErrorType, SendTextInfoType>({
    mutationFn: (data: SendTextInfoType) => {
      return sendText(data);
    },
    onSuccess: data => {
      console.log('문자 전송 성공', data);
      resetPhoneNumberError();
      setMessageSent(true);
      sessionStorage.setItem('textMessageId', data.payload.messageId);
    },
    onError: error => {
      const errorResponse = error.response.data;
      console.log('텍스트 전송 실패 에러');
      if (errorResponse.errorMessage === 'phone_number_unavailable') {
        setPhoneNumberError({
          state: true,
          message: errorResponse.errorMessage,
        });
      }
    },
  });
};

export default useSendText;
