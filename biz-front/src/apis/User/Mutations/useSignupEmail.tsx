import { apiErrorType } from '@/types/apiResponse';
import { SignupEmailInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { SignupEmail } from '../userAPI';

const useSignupEmail = () => {
  return useMutation<string, apiErrorType, SignupEmailInfo>({
    mutationFn: data => {
      console.log(data);
      return SignupEmail(data);
    },
    onSuccess: data => {
      console.log(data);
    },
    onError: () => {},
  });
};

export { useSignupEmail };
