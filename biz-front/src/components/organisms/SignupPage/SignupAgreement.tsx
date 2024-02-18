import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { CheckBox } from '@/components/molecules/SignupPage/CheckBox';
import { AGREEDATA } from '@/constants/agreeData';
import { agreementState, signupInfoState } from '@/states/User';
import { AgreeDataType } from '@/types/user';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const SignupAgreement = () => {
  const [AgreeData, setAgreeData] = useState<AgreeDataType[]>(AGREEDATA);
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const setAgreementState = useSetRecoilState(agreementState);
  const setSignupInfoState = useSetRecoilState(signupInfoState);
  const signupInfoStatedata = useRecoilValue(signupInfoState);
  const agreementStatedata = useRecoilValue(agreementState);

  // 각자 체크
  const handleCheck = (idx: string) => {
    const numberIdx = parseInt(idx);

    const updateData = AgreeData.map((item, idx) => {
      if (idx === numberIdx - 1) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });

    setAgreeData(updateData);
  };

  // 전체 체크
  const handleAllCheck = () => {
    setAllCheck(!allCheck);
    const updateData = AgreeData.map((item, idx) => {
      return { ...item, checked: !allCheck };
    });

    setAgreeData(updateData);
  };

  // 둘 다 필수 동의하는지 확인
  const handleAgreementState = () => {
    // 필수 동의 확인
    if (AgreeData[0].checked && AgreeData[1].checked) {
      setAgreementState(true);
    } else {
      setAgreementState(false);
    }

    // 셋중 하나 false 면
    if (
      !AgreeData[0].checked ||
      !AgreeData[1].checked ||
      !AgreeData[2].checked
    ) {
      setAllCheck(false);
    } else {
      setAllCheck(true);
    }

    // 이메일 동의 확인
    handleEmailAgreement(AgreeData[2].checked);
  };

  // 이메일 동의 확인
  const handleEmailAgreement = (check: boolean) => {
    setSignupInfoState(prev => ({
      ...prev,
      allowEmailMarketing: check,
    }));
  };

  useEffect(() => {
    handleAgreementState();
  }, [AgreeData]);

  const test = () => {
    console.log(AgreeData);
    console.log(signupInfoStatedata);
    console.log(agreementStatedata);
  };

  return (
    <>
      <Text size="body2" $marginBottom="15px">
        약관 동의
      </Text>
      <CheckBox
        $marginBottom="15px"
        checked={allCheck}
        checkBoxId={'0'}
        mention={'전체 동의'}
        detailContent={''}
        handleCheck={handleAllCheck}
      />

      {AgreeData.map((data, idx) => (
        <CheckBox
          $marginBottom="7px"
          $marginLeft="15px"
          key={idx}
          checked={data.checked}
          checkBoxId={data.checkBoxId}
          mention={data.mention}
          detailContent={data.detailContent}
          handleCheck={handleCheck}
        ></CheckBox>
      ))}

      <Button onClick={test}>테스트</Button>
    </>
  );
};

export { SignupAgreement };
