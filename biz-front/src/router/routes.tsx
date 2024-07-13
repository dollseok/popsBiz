import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import SignupPage from '@/pages/SignupPage/SignupPage';
import { PATH } from '@/constants/path';
import UserProfilePage from '@/pages/UserProfliePage/UserProfilePage';
import PopupListPage from '@/pages/PopupListPage/PopupListPage';
import PopupRegistPage from '@/pages/PopupRegistPage/PopupRegistPage';
import PopupTicketPage from '@/pages/PopupTicketPage/PopupTicketPage';
import NoticePage from '@/pages/NoticePage/NoticePage';
import InquiryPage from '@/pages/InquiryPage/InquiryPage';
import HomePage from '@/pages/HomePage/HomePage';
import SocialLoginPage from '@/pages/SocialLoginPage/SocialLoginPage';
import SocialSignupPage from '@/pages/SocialSignupPage/SocialSignupPage';
import BasicDataComp from '@/components/organisms/MainPage/Popup/Regist/BasicDataComp';
import AddtionalDataComp from '@/components/organisms/MainPage/Popup/Regist/AdditionalDataComp';
import TicketDataComp from '@/components/organisms/MainPage/Popup/Regist/TicketDataComp';
import PopupListComp from '@/components/organisms/MainPage/Popup/List/PopupListComp';
import PopupDetailComp from '@/components/organisms/MainPage/Popup/List/PopupDetailComp';
import PopupDetailInquiryComp from '@/components/organisms/MainPage/Popup/List/PopupDetailInquiryComp';
import PopupDetailCommentComp from '@/components/organisms/MainPage/Popup/List/PopupDetailCommentComp';

// import LandingPage from '../pages/LandingPage/LandingPage';
// import MainPage from '../pages/MainPage/MainPage';

const router = createBrowserRouter([
  // 기본 홈페이지는 두개다, navbar에 따른 이동
  {
    path: PATH.ROOT,
    element: <App />, // 여기엔 이미 Home or Landing 둘중하나
    children: [
      { index: true, element: <HomePage /> }, // outlet에 기본값으로 넣어줌
      //user
      { path: PATH.USERPROFILE, element: <UserProfilePage /> },
      //popup
      {
        path: PATH.POPUPLIST,
        element: <PopupListPage />,
        children: [
          { index: true, element: <PopupListComp /> },
          { path: PATH.POPUPDETAIL, element: <PopupDetailComp /> }, // 여기 변수 설정
          { path: PATH.POPUPCOMMENT, element: <PopupDetailCommentComp /> },
          { path: PATH.POPUPINQUIRY, element: <PopupDetailInquiryComp /> },
        ],
      },
      //popupregist 디테일
      {
        path: PATH.POPUPREGIST,
        element: <PopupRegistPage />,
        children: [
          { index: true, element: <BasicDataComp /> },
          { path: PATH.ADDITIONALDATA, element: <AddtionalDataComp /> },
          { path: PATH.TICKETDATA, element: <TicketDataComp /> },
        ],
      },
      { path: PATH.POPUPTICKET, element: <PopupTicketPage /> },
      //notice
      { path: PATH.NOTICE, element: <NoticePage /> },
      //inquiry
      { path: PATH.INQUIRY, element: <InquiryPage /> },
    ],
  },

  // social login
  { path: PATH.SOCIALLOGIN, element: <SocialLoginPage /> },
  { path: PATH.SOCIALSIGNUP, element: <SocialSignupPage /> },
  // 회원가입
  { path: PATH.SIGNUP, element: <SignupPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
