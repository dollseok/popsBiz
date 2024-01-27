import React, { Suspense } from 'react';
import './App.css';
import LandingPage from '@/pages/LandingPage/LandingPage';
import MainPage from '@/pages/MainPage/MainPage';

function App() {
  return (
    <Suspense fallback={<>로딩중</>}>
      {/* 유저 상태에따라 true false */}
      {true ? <LandingPage /> : <MainPage />}
    </Suspense>
  );
}

export default App;
