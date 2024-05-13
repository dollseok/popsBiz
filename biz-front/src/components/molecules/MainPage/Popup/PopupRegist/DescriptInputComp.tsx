import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useImageInput } from '@/hooks/useImageInput';
import { useState } from 'react';

const DescriptInputComp = () => {
  const {
    imageUrl,
    inputRef,
    handleImageChange,
    handleButtonClick,
    clearImage,
  } = useImageInput();

  const [descript, setDescript] = useState<string>('');

  const handleDescriptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setDescript(inputData);
  };

  return (
    <>
      <Text size="body1" $fontWeight="bold">
        간단 설명
      </Text>
      <Wrapper option="Grid" $gridColumns="500px auto" $gap="10px">
        <Wrapper>
          <Text size="body4" $color="grey1">
            간단한 설명을 통하여 소비자들의 관심을 이끌어보세요.
          </Text>
          <Textarea
            $width="500px"
            $height="250px"
            $placeholder="예시: 팝스,인스타툰(instatoon)"
            onChange={e => {
              handleDescriptChange(e);
            }}
          />
          <Wrapper option="Flex">
            <Text size="body3" $marginLeft="auto">
              {descript.length}/1,500
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Text size="body4" $color="grey1">
            배경 이미지(선택)
          </Text>
          {/* TODO: 임시 이미지 */}
          <Image src={imageUrl} width={268} height={122}></Image>
          <Wrapper option="Flex" $width="268px">
            <Button
              $fontSize="12px"
              $marginLeft="auto"
              size="blackButton"
              option="blackButton"
              onClick={handleButtonClick}
            >
              파일 선택
            </Button>
          </Wrapper>

          <Text size="body4" $color="grey1" $marginTop="10px">
            * 추천 사이즈 : 1,200 x 900 px (비율 4:3)
            <br />
            * 대표 이미지 1장만 업로드 가능
            <br />* 용량 : 10MB 이하 (파일 유형 jpg,jpeg,png)
          </Text>
        </Wrapper>
      </Wrapper>

      {/* 보이지 않는 파트 */}
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleImageChange}
      ></input>
    </>
  );
};

export default DescriptInputComp;
