import { DEFAULT_TIME_DATA } from '@/constants/defaultTimeData';
import { atom } from 'recoil';

export const popupBasicDataState = atom({
  key: 'popupBasicDataState',
  default: {
    title: '',
    content: '',
    startDate: '',
    endDate: '',
    time: DEFAULT_TIME_DATA,
    address: '',
    hashtag: [],
    images: [],
  },
});
