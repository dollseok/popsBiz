import { apiErrorType } from '@/types/apiResponse';
import { useMutation } from '@tanstack/react-query';
import { CheckNickname } from '../userAPI';

const useCheckNickname = () => {
  return useMutation<null, apiErrorType, string>({
    mutationFn: (nickname: string) => {
      console.log(nickname);
      return CheckNickname(nickname);
    },
    onSuccess: data => {
      console.log(data);
      // TODO:
      // 1. 이 함수를 호출하기 전에 닉네임 형태 확인해서 들어와야함
      // 2. 닉네임 관련 버튼, deactivate 하거나 onchange 할 때 리코일에서 바뀌었다고 상태확인
    },
    onError: () => {},
  });
};

export { useCheckNickname };
