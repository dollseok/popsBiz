import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const SignupButtonsComp = () => {
  return (
    <>
      <Wrapper option="Row" $width="363px">
        <Wrapper $marginLeft="auto">
          <Button size="extraSmall" option="textButton">
            회원가입
          </Button>
          <Button size="extraSmall" option="textButton">
            비밀번호 찾기
          </Button>
        </Wrapper>
      </Wrapper>

      <Button option="border" $marginBottom="10px" $marginTop="38px">
        구글 이메일로 시작하기
      </Button>
      <Button option="border">페이스북으로 시작하기</Button>
    </>
  );
};

export { SignupButtonsComp };
