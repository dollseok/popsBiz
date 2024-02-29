import BannerComp from '@/components/molecules/HomePage/BannerComp';
import NoticeHomeComp from '@/components/molecules/HomePage/NoticeHomeComp';
import PopupHomeComp from '@/components/molecules/HomePage/PopupHomeComp';

const HomeComp = () => {
  return (
    <>
      {/* Banner */}
      <BannerComp />
      {/* popuplist */}
      <PopupHomeComp />
      {/* notice */}
      <NoticeHomeComp />
    </>
  );
};

export default HomeComp;
