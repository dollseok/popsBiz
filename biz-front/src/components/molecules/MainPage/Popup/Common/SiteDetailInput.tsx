import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import Input from '@/components/atoms/Input/Input';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent, useEffect, useState } from 'react';
import { siteDataType } from '../PopupRegist/AddtionalData/SiteInputComp';
import Button from '@/components/atoms/Button/Button';
import { TiDelete } from 'react-icons/ti';

interface siteDetailDataType {
  index: number;
  data: siteDataType;
  deleteFn: (idx: number) => void;
  setFn: (idx: number, data: siteDataType) => void;
}

const SiteDetailInput = (props: siteDetailDataType) => {
  const dataList = ['인스타그램', '웹사이트'];
  const propsType = props.data.type;
  const propsName = props.data.name;
  const propsLink = props.data.link;

  const [type, setType] = useState<string>(propsType);
  const [name, setName] = useState<string>(propsName);
  const [link, setLink] = useState<string>(propsLink);

  const handleDeleteClick = () => {
    props.deleteFn(props.index);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const updateData = { type: type, name: e.target.value, link: link };
    props.setFn(props.index, updateData);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    const updateData = { type: type, name: name, link: e.target.value };
    props.setFn(props.index, updateData);
  };

  // select가 바뀌면 리셋
  useEffect(() => {
    setName('');
    setLink('');
    const updateData = { type: type, name: name, link: link };
    props.setFn(props.index, updateData);
  }, [type]);

  return (
    <>
      <Wrapper option="Row" $marginBottom="10px">
        <Wrapper option="Grid" $gridColumns="1fr 2fr 3fr" $gap="10px">
          <Dropdown
            selectData={dataList}
            content="siteInput"
            value={propsType}
            setFn={setType}
          />
          <Input
            type="text"
            $inputsize="fullSize"
            onChange={handleNameChange}
            value={propsName}
            placeholder={
              type === '인스타그램'
                ? '대표명칭을 입력해주세요.(예 : 팝스 공식계정)'
                : '대표명칭을 입력해주세요.(예 : 예약 사이트)'
            }
          ></Input>
          <Input
            type="text"
            $inputsize="fullSize"
            onChange={handleLinkChange}
            value={propsLink}
            placeholder={
              type === '인스타그램'
                ? '소셜 아이디를 입력해주세요.(예 : pops.official)'
                : '웹사이트 링크를 입력해주세요.(예 : https://www.pops.co.kr)'
            }
          ></Input>
        </Wrapper>
        <Button
          size="iconSize"
          option="siteDeleteButton"
          onClick={handleDeleteClick}
        >
          <TiDelete color="black" size={30} />
        </Button>
      </Wrapper>
    </>
  );
};

export default SiteDetailInput;
