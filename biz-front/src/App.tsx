import { Suspense, useEffect } from 'react';
import './App.css';
import LandingPage from '@/pages/LandingPage/LandingPage';
import MainPage from '@/pages/MainPage/MainPage';
import { useRecoilState } from 'recoil';
import { loginState } from './states/User';
import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <Suspense fallback={<>로딩중</>}>
      {/* 유저 상태에따라 true false */}
      {login ? <MainPage /> : <LandingPage />}
    </Suspense>
  );
}

export default App;
