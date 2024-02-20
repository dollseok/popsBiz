import { useMutation } from '@tanstack/react-query';
import { uploadProfileImage } from '../userAPI';
import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { uploadImageType } from '@/types/user';

const useUploadProfileImage = () => {
  return useMutation<apiSuccessType, apiErrorType, uploadImageType>({
    mutationFn: (data: uploadImageType) => {
      return uploadProfileImage(data);
    },
    onSuccess: data => {
      console.log('이미지 저장 완료');
    },
    onError: () => {},
  });
};

export { useUploadProfileImage };
