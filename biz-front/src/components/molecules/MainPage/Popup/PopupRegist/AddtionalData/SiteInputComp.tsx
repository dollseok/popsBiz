import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import SiteDetailInput from '../../Common/SiteDetailInput';
import Button from '@/components/atoms/Button/Button';

import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';

export interface siteDataType {
  type: string;
  name: string;
  link: string;
}

const SiteInputComp = () => {
  const tmp = { type: '인스타그램', name: '', link: '' };
  const [siteListData, setSiteListData] = useState<siteDataType[]>([tmp]);

  const deleteSiteData = (idx: number) => {
    console.log(idx);

    setSiteListData(prev => {
      console.log(prev);
      console.log([...prev.slice(0, idx), ...prev.slice(idx + 1)]);
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  };

  const updateSiteListData = (updateIdx: number, updateData: siteDataType) => {
    setSiteListData(prev =>
      prev.map((data, idx) => (idx === updateIdx ? updateData : data))
    );
  };

  const handleButtonClick = () => {
    setSiteListData(prev => [
      ...prev,
      { type: '인스타그램', name: '', link: '' },
    ]);
  };

  const check = () => {
    console.log(siteListData);
  };

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          SNS/Website
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          인스타그램, 예약사이트 등을 연결하여 소비자들의 편리성을 높여보세요.
        </Text>
        {siteListData.map((data, idx) => (
          <SiteDetailInput
            key={idx}
            index={idx}
            data={data}
            deleteFn={deleteSiteData}
            setFn={updateSiteListData}
          />
        ))}
        <Button option="border" $width="100%" onClick={handleButtonClick}>
          <BsFillPlusCircleFill color="grey" size={30} />
        </Button>
        <Button onClick={check}>체크</Button>
      </Wrapper>
    </>
  );
};

export default SiteInputComp;
