import EventInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/EventInputComp';
import HashtagInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/HashtagInputComp';
import PopupNoticeInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/PopupNoticeInputComp';
import SiteInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/SiteInputComp';

const AddtionalDataComp = () => {
  return (
    <>
      {/* 해시태그 */}
      <HashtagInputComp />
      {/* SNS/Website */}
      <SiteInputComp />
      {/* 이벤트 */}
      <EventInputComp />
      {/* 공지사항 */}
      <PopupNoticeInputComp />
    </>
  );
};

export default AddtionalDataComp;
