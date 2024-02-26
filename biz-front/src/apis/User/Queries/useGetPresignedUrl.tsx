import { useSuspenseQuery } from '@tanstack/react-query';
import { getPresignedUrl } from '../userAPI';

const useGetPresignedUrl = () => {
  return useSuspenseQuery({
    queryKey: ['presignedUrl'],
    queryFn: () => getPresignedUrl(),
    refetchInterval: 1000, // 리패치 하는 시간 1초
  });
};

export { useGetPresignedUrl };
