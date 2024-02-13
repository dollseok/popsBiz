import { apiErrorType } from '@/types/apiResponse';
import { CertEmailInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { CertEmail } from '../userAPI';

const useCertEmail = () => {
  return useMutation<string, apiErrorType, CertEmailInfo>({
    mutationFn: (data: CertEmailInfo) => CertEmail(data),
    onSuccess: data => {
      console.log(data);
      // TODO:
      // 1. 인증이 완료되었으니, 인풋과 이메일 관련 버튼 deactivate
      // 2. 회원 가입 데이터 리코일에 이메일 저장
    },
    onError: () => {},
  });
};

export { useCertEmail };
