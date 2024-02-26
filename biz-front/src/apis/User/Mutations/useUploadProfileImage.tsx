import { useMutation } from '@tanstack/react-query';
import { uploadProfileImage } from '../userAPI';
import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { uploadImageType } from '@/types/user';
import { extractIdFromUrl } from '@/utils/extractIdFromUrl';
import { useGetPresignedUrl } from '../Queries/useGetPresignedUrl';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { signupInfoState } from '@/states/User';

const useUploadProfileImage = () => {
  const [profileKey, setProfileKey] = useState<string>('');

  const getPresignedUrl = useGetPresignedUrl(); // 이미지 업데이트 해줄 url
  const setSignupInfo = useSetRecoilState(signupInfoState); // 회원가입에 요구되는 데이터

  // response 200 이 리턴값
  return useMutation<number | undefined, apiErrorType, uploadImageType>({
    mutationFn: (data: uploadImageType) => {
      const url = getPresignedUrl.data.urls[0]; // S3 Bucket url/
      console.log(url);
      setProfileKey('biz/admin/profiles/' + extractIdFromUrl(url));
      return uploadProfileImage({ url: url, blob: data.blob });
    },
    onSuccess: data => {
      if (data === 200) {
        console.log('사진 저장 성공', data);
        setSignupInfo(prev => ({ ...prev, profileKey: profileKey }));
        return profileKey;
      }
    },
    onError: () => {},
  });
};

export { useUploadProfileImage };
