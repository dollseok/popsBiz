import React from 'react';

import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/molecules/SignupPage/SignupComp';
import { UserdataComp } from '@/components/molecules/SignupPage/UserdataComp';

const SignupPage = () => {
  return (
    <>
      <Wrapper $size="Signup" option="Center">
        <GoBackNavComp />
        <SignupComp />
        <UserdataComp />
      </Wrapper>
    </>
  );
};

export default SignupPage;
