import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

interface signupAgreementProps {
  checkBoxId: string;
  checked: boolean;
  mention: string;
  detailContent: string;
  handleCheck: (idx: string) => void;
}

const CheckBox = ({
  checkBoxId,
  checked,
  mention,
  detailContent,
  handleCheck,
}: signupAgreementProps) => {
  const handleChange = () => {
    handleCheck(checkBoxId);
  };

  return (
    <>
      <Wrapper>
        <input
          type="checkbox"
          id={checkBoxId}
          name="signupAgreement"
          checked={checked}
          onChange={handleChange}
        ></input>
        <label htmlFor={checkBoxId}>{mention}</label>
        <Text size="body3">{detailContent}</Text>
      </Wrapper>
    </>
  );
};

export { CheckBox };
