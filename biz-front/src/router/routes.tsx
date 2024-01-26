import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import SignupPage from '../pages/SignupPage/SignupPage';
import { PATH } from '../constants/path';
import UserProfilePage from '../pages/UserProfliePage/UserProfilePage';
import UserPaymentPage from '../pages/UserPaymentPage/UserPaymentPage';
import PopupListPage from '../pages/PopupListPage/PopupListPage';
import PopupRegistPage from '../pages/PopupRegistPage/PopupRegistPage';
import PopupTicketPage from '../pages/PopupTicketPage/PopupTicketPage';
import NoticePage from '../pages/NoticePage/NoticePage';
import InquiryPage from '../pages/InquiryPage/InquiryPage';

// import LandingPage from '../pages/LandingPage/LandingPage';
// import MainPage from '../pages/MainPage/MainPage';

const router = createBrowserRouter([
  // 기본 홈페이지는 두개다, navbar에 따른 이동
  {
    path: PATH.ROOT,
    element: <App />, // 여기엔 이미 Home or Landing 둘중하나
    children: [
      //user
      { path: PATH.USERPROFILE, element: <UserProfilePage /> },
      { path: PATH.USERPAYMENT, element: <UserPaymentPage /> },
      //popup
      { path: PATH.POPUPLIST, element: <PopupListPage /> },
      { path: PATH.POPUPREGIST, element: <PopupRegistPage /> },
      { path: PATH.POPUPTICKET, element: <PopupTicketPage /> },
      //notice
      { path: PATH.NOTICE, element: <NoticePage /> },
      //inquiry
      { path: PATH.INQUIRY, element: <InquiryPage /> },
    ],
  },

  // 회원가입
  { path: PATH.SIGNUP, element: <SignupPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
