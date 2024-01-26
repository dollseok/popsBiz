import React from 'react';
import { Outlet } from 'react-router';

const MainPage = () => {
  return (
    <>
      <h1>여기는 메인 페이지</h1>
      <div>좌측 navbar</div>
      <div>상단 bar</div>
      <div>Outlet으로 중심페이지 관리</div>
      <Outlet></Outlet>
    </>
  );
};

export default MainPage;
