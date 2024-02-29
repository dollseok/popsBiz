import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import SignupPage from '@/pages/SignupPage/SignupPage';
import { PATH } from '@/constants/path';
import UserProfilePage from '@/pages/UserProfliePage/UserProfilePage';
import UserPaymentPage from '@/pages/UserPaymentPage/UserPaymentPage';
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
      { path: PATH.USERPAYMENT, element: <UserPaymentPage /> },
      //popup
      { path: PATH.POPUPLIST, element: <PopupListPage /> },
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
