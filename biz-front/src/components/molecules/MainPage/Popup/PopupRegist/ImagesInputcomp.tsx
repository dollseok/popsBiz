import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

import { PiTrashBold } from 'react-icons/pi';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const ImagesInputComp = () => {
  // TODO: 이미지 리스트로해서 한번에 여러개 추가하는 방법 고안 (input multiple 속성 사용)
  // TODO: 드래그앤 드랍 구현 -> 이미지 옮겼을 때 대표이미지가 가장 앞에 있도록
  // TODO: 위치변경 구현

  // 임시
  const [imageList, setImageList] = useState<string[]>([]);
  useEffect(() => {
    setImageList(['1', '2', '3', '4', '7', '7', '7']);
  }, []);

  return (
    <>
      <Wrapper>
        <Text size="body1" $fontWeight="bold">
          상세 이미지 (Image)
        </Text>
        <Text size="body4" $color="grey1">
          소비자들에게 보여주고 싶은 이미지(사진 또는 포스터)를 업로드해보세요.
        </Text>
        <Wrapper option="Scrollx">
          {/* 이미지 추가 버튼 */}

          {/* TODO: 리스트 있을 때 없을때 변경 */}
          <Wrapper option="Flex" $marginRight="10px">
            <Button
              option="ImageAddButton"
              $width={imageList ? '70px' : '190px'}
            >
              <BsFillPlusCircleFill color="grey" size={30} />
            </Button>
          </Wrapper>
          <>
            {/* 이미지 (+삭제버튼 추가) */}
            {imageList.map((data, idx) => (
              <Wrapper option="Flex" $marginRight="10px" key={idx}>
                <Image src={data} width={190} height={190} $borderRadius={5} />
                <Button option="ImageDelButton" key={idx}>
                  <PiTrashBold color="red" size={23} />
                </Button>
              </Wrapper>
            ))}
          </>
        </Wrapper>
        <Text size="body4" $color="grey1" $marginTop="10px">
          * 추천 사이즈 : 1,000 x 1,000px (비율 1:1) <br />
          * 최대 10장까지 업로드 가능 <br />
          * 용량 : 10MB 이하 (파일 유형 jpg,jpeg,png) <br />
        </Text>
      </Wrapper>
    </>
  );
};

export default ImagesInputComp;
