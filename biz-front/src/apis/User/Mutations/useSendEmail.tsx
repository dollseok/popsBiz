import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../userAPI';
import { SendEmailInfo } from '@/types/user';
import { apiSuccessType } from '@/types/apiResponse';
import { useRecoilState } from 'recoil';
import { timerStartState } from '@/states/User';

const useSendEmail = () => {
  const [timerStart, setTimerStart] = useRecoilState(timerStartState);

  return useMutation<apiSuccessType, unknown, SendEmailInfo>({
    mutationFn: (data: SendEmailInfo) => sendEmail(data),
    onSuccess: data => {
      console.log('여기?');
      console.log(data);
      // TODO:
      // data안의 sendId 받아서 로컬 스토리지에 저장
      sessionStorage.setItem('sendId', data.payload.sendId);
      setTimerStart(!timerStart);
    },
    onError: () => {},
  });
};

export { useSendEmail };
