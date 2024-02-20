import { useSuspenseQuery } from '@tanstack/react-query';
import { getPresignedUrl } from '../userAPI';

const useGetPresignedUrl = () => {
  return useSuspenseQuery({
    queryKey: ['presignedUrl'],
    queryFn: () => getPresignedUrl(),
  });
};

export { useGetPresignedUrl };
