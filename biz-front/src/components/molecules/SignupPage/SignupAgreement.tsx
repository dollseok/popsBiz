import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useState } from 'react';

interface signupAgreementProps {
  checkBoxId: string;
  checked: boolean;
  mention: string;
  detailContent: string;
}

const CheckBox = ({
  checkBoxId,
  mention,
  detailContent,
}: signupAgreementProps) => {
  return (
    <>
      <Wrapper>
        <input type="checkbox" id={checkBoxId} name="signupAgreement"></input>
        <label htmlFor={checkBoxId}>{mention}</label>
        <Text size="body3">{detailContent}</Text>
      </Wrapper>
    </>
  );
};

const AgreeData = [
  {
    checkBoxId: '1',
    mention: '이용약관에 동의합니다',
    detailContent: '블라블라1',
    checked: false,
  },
  {
    checkBoxId: '2',
    mention: '개인정보 수집 동의합니다',
    detailContent: '블라블라2',
    checked: false,
  },
  {
    checkBoxId: '3',
    mention: '이메일 동의합니다',
    detailContent: '블라블라3',
    checked: false,
  },
];

const SignupAgreement = () => {
  return (
    <>
      <CheckBox
        checked={false}
        checkBoxId={'0'}
        mention={'전체 동의합니다'}
        detailContent={''}
      />

      {AgreeData.map((data, idx) => (
        <CheckBox
          key={idx}
          checked={data.checked}
          checkBoxId={data.checkBoxId}
          mention={data.mention}
          detailContent={data.detailContent}
        ></CheckBox>
      ))}
    </>
  );
};

export { SignupAgreement };
