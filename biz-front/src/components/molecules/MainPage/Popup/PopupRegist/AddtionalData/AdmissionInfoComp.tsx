import { Text } from '@/components/atoms/Text/Text';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent, useState } from 'react';

const AdmissionInfoComp = () => {
  const [freeChecked, setFreeChecked] = useState<boolean>(false);
  const [payChecked, setPayChecked] = useState<boolean>(false);
  const [admissionTextInfo, setAdmissionTextInfo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    if (e.target.id === 'free') {
      if (!freeChecked) {
        setPayChecked(false);
      }
      setFreeChecked(!freeChecked);
    } else if (e.target.id === 'pay') {
      if (!payChecked) {
        setFreeChecked(false);
      }
      setPayChecked(!payChecked);
    }
  };

  return (
    <>
      <Wrapper $marginBottom="18px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          입장 정보
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          입장 비용, 예약 정보 등 입장 정보를 통해 소비자들의 이용 편의성을
          높여보세요.
        </Text>
        <Wrapper $marginBottom="8px" option="Row">
          <input
            type="checkbox"
            id="free"
            name="free"
            checked={freeChecked}
            onChange={e => handleChange(e)}
          ></input>
          <label htmlFor="free">무료</label>
          <input
            type="checkbox"
            id="pay"
            name="pay"
            checked={payChecked}
            onChange={e => handleChange(e)}
          ></input>
          <label htmlFor="pay">유료</label>
        </Wrapper>
        <Wrapper>
          <Textarea
            $width="338px"
            $height="86px"
            onChange={e => setAdmissionTextInfo(e.target.value)}
          ></Textarea>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default AdmissionInfoComp;
