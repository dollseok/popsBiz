import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

interface signupAgreementProps {
  checkBoxId: string;
  checked: boolean;
  mention: string;
  detailContent?: string;
  handleCheck: (idx: string) => void;
  $marginBottom?: string;
  $marginLeft?: string;
}

const CheckBox = ({
  checkBoxId,
  checked,
  mention,
  detailContent,
  handleCheck,
  $marginBottom,
  $marginLeft,
}: signupAgreementProps) => {
  const handleChange = () => {
    handleCheck(checkBoxId);
  };

  return (
    <>
      <Wrapper
        option="RowSideEnd"
        $marginBottom={$marginBottom}
        $marginLeft={$marginLeft}
      >
        <Wrapper>
          <input
            type="checkbox"
            id={checkBoxId}
            name="signupAgreement"
            checked={checked}
            onChange={handleChange}
          ></input>
          <label htmlFor={checkBoxId}>{mention}</label>
        </Wrapper>
        {/* TODO: 아래 텍스트 대신에 링크를 넣어야할듯 */}
        {detailContent ? (
          <Button option="textButton" size="extraSmall">
            {detailContent}
          </Button>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export { CheckBox };
