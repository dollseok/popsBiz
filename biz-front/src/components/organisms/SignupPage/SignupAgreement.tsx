import { Text } from '@/components/atoms/Text/Text';
import { CheckBox } from '@/components/molecules/SignupPage/CheckBox';
import { AGREEDATA } from '@/constants/agreeData';
import {
  agreeErrorState,
  agreementState,
  signupInfoState,
  signupModeState,
  socialSignupInfoState,
} from '@/states/User';
import { AgreeDataType } from '@/types/user';
import { useEffect, useState } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

const SignupAgreement = () => {
  const [AgreeData, setAgreeData] = useState<AgreeDataType[]>(AGREEDATA);
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const setAgreementState = useSetRecoilState(agreementState);
  const setSignupInfoState = useSetRecoilState(signupInfoState);
  const setSocialSignupInfoState = useSetRecoilState(socialSignupInfoState);
  const signupMode = useRecoilValue(signupModeState);

  const [agreeError, setAgreeError] = useRecoilState(agreeErrorState);
  const resetAgreeError = useResetRecoilState(agreeErrorState);

  // 각자 체크
  const handleCheck = (idx: number) => {
    const numberIdx = idx; // item이 자체적으로 가지고 있는 idx

    const updateData = AgreeData.map((item, idx) => {
      if (idx === numberIdx - 1) {
        // 필수 취소 에러
        if (idx !== 2 && item.checked) {
          // 선택사항이 아니고 체크되었던게 true 였다면
          setAgreeError({
            state: true,
            message: '필수 약관에 동의하셔야 회원으로 가입할 수 있습니다.',
          });
        }

        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });

    setAgreeData(updateData); // 이후 useEffect로 필수 확인
  };

  // 전체 체크
  const handleAllCheck = () => {
    setAllCheck(!allCheck);
    const updateData = AgreeData.map((item, idx) => {
      // 필수 취소 에러
      if (item.checked) {
        // 선택사항이 아니고 체크되었던게 true 였다면
        setAgreeError({
          state: true,
          message: '필수 약관에 동의하셔야 회원으로 가입할 수 있습니다.',
        });
      }
      return { ...item, checked: !allCheck };
    });

    setAgreeData(updateData);
  };

  // 둘 다 필수 동의하는지 확인
  const handleAgreementState = () => {
    // 필수 동의 확인
    if (AgreeData[0].checked && AgreeData[1].checked) {
      setAgreementState(true);
      resetAgreeError();
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
    if (signupMode === 'basic') {
      setSignupInfoState(prev => ({
        ...prev,
        allowEmailMarketing: check,
      }));
    } else if (signupMode === 'social') {
      setSocialSignupInfoState(prev => ({
        ...prev,
        AllowEmailMarketing: check,
      }));
    }
  };

  useEffect(() => {
    handleAgreementState();
  }, [AgreeData]);

  return (
    <>
      <Text size="body2" $marginBottom="15px">
        약관 동의
      </Text>
      <CheckBox
        $marginBottom="15px"
        checked={allCheck}
        checkBoxId={0}
        mention={'전체 동의'}
        detailContent={''}
        handleCheck={handleAllCheck}
      />

      {AgreeData.map((data, idx) => (
        <CheckBox
          $marginBottom="7px"
          $marginLeft="10px"
          key={idx}
          checked={data.checked}
          checkBoxId={data.checkBoxId}
          mention={data.mention}
          detailContent={data.detailContent}
          handleCheck={handleCheck}
        ></CheckBox>
      ))}

      <Text $color="danger" size="body4" $marginLeft="10px">
        {agreeError.message}
      </Text>
    </>
  );
};

export { SignupAgreement };
