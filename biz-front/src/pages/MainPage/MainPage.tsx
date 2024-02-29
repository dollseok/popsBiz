import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { Footer } from '@/components/molecules/MainPage/Common/Footer';
import { Navbar } from '@/components/molecules/MainPage/Common/Navbar';
import { SideNavBar } from '@/components/molecules/MainPage/Common/SideNavbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Wrapper option="Flex">
        <SideNavBar></SideNavBar>
        <Wrapper $width="90%">
          <Wrapper $size="MainContent">
            <Outlet></Outlet>
          </Wrapper>
          <Footer></Footer>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default MainPage;
