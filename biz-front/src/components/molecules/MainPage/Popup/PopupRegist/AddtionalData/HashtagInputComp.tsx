import { Box } from '@/components/atoms/Box/Box';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { CgClose } from 'react-icons/cg';

const HashtagInputComp = () => {
  const [hashtagList, setHashtagList] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState<string>('');

  const handleDeleteClick = (idx: number) => {
    setHashtagList(prev => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  //TODO: 엔터 클릭했을 때 추가 되는 함수 만들기
  const handleEnterKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHashtagList(prev => [...prev, hashtagInput]);
      setHashtagInput('');
    }
  };

  const handleHashtagValue = (e: ChangeEvent<HTMLInputElement>) => {
    setHashtagInput(e.target.value);
  };

  //TODO: 유효성 검사

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="5px">
          해시태그
        </Text>
        <Text size="body4" $color="grey1" $marginBottom="10px">
          팝업을 나타내는 가장 적합한 해시태그를 통해 소비자의 접근성을
          높여보세요. (최대 5개)
        </Text>

        <Wrapper option="LineChangeBox">
          {hashtagList.map((data, idx) => (
            <Box key={idx} $option="hashtagBox">
              {data}
              <Button
                option="none"
                size="iconSize"
                $marginLeft="5px"
                onClick={() => {
                  handleDeleteClick(idx);
                }}
              >
                <CgClose />
              </Button>
            </Box>
          ))}
          <Input
            option="transparent"
            $inputsize="hashtagInput"
            placeholder="#해시태그"
            onKeyUp={handleEnterKeyUp}
            onChange={handleHashtagValue}
            value={hashtagInput}
            type="text"
          ></Input>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default HashtagInputComp;
