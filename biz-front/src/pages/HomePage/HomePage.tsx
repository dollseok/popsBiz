import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Wrapper option="Column">
        <h1>기본 홈페이지</h1>
        <div>배너</div>
        <div>팝업 등록 관리</div>
        <div>공지사항</div>
      </Wrapper>
    </>
  );
};

export default HomePage;
