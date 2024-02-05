import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const SignupComp = () => {
  return (
    <>
      <Wrapper option="Column" $width="40rem">
        <Text
          size="heading"
          $marginBottom="57px"
          $marginRight="auto"
          $fontWeight="bold"
        >
          회원가입
        </Text>
        <Text size="body2" $marginBottom="15px">
          아이디(이메일)
        </Text>
        <Wrapper option="Row">
          <Input type="text" placeholder="ex)pops@example.com" />
          <Button size="small">인증 메일 보내기</Button>
        </Wrapper>
        <Wrapper option="Row">
          <Input type="text" $inputsize="small" placeholder="인증코드 입력" />
          {/* <timer></timer> */}
          <Button size="small">이메일 인증</Button>
        </Wrapper>
        <Text size="body4" $color="grey1">
          * 실제로 사용하시는 이메일로 기입해주시기 바랍니다.
          <br />* 중요한 공지사항 및 알림 등을 보내드립니다.
        </Text>

        <Text $color="danger" size="body4">
          여기에다 에러메시지
        </Text>

        <Text size="body2" $marginBottom="15px">
          비밀번호
        </Text>
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Text size="body4" $color="grey1">
          * 총 8 ~ 20자리의 영문/숫자/특수문자 중 2가지 이상을 포함하여
          입력하세요.
        </Text>
        <Text $color="danger" size="body4">
          여기에다 에러메시지
        </Text>

        <Text size="body2" $marginBottom="15px">
          비밀번호 확인
        </Text>
        <Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
        <Text $color="danger" size="body4">
          여기에다 에러메시지
        </Text>
      </Wrapper>
    </>
  );
};

export { SignupComp };
