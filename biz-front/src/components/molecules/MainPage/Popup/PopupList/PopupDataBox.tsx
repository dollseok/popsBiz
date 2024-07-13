import { Box } from '@/components/atoms/Box/Box';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

interface PopupDataProps {
  data: {
    title: string;
    cnt: number;
    id: number;
  };
}

const PopupDataBox = (props: PopupDataProps) => {
  const tmp = [
    { title: '제목', date: '2024-06-30' },
    {
      title:
        '실시간 댓글 내용 표시, max line 1, 넘칠 경우 elcipwefwefwefwefwef',
      date: '2024-06-30',
    },
    { title: '제목', date: '2024-06-30' },
    { title: '제목', date: '2024-06-30' },
    { title: '제목', date: '2024-06-30' },
  ];

  return (
    <>
      <Box $option="PopupDataBox">
        <Wrapper
          option="RowSideEnd"
          $size="PopupDataItem"
          $backgroundColor="grey2"
        >
          <Text>
            {props.data.title}({props.data.cnt})
          </Text>
          <Button option="textButton" size="iconSize">
            더보기
          </Button>
        </Wrapper>
        {tmp.map((item, idx) => (
          <Wrapper option="RowSideEnd" $size="PopupDataItem">
            <Wrapper option="TextEllipsis">{item.title}</Wrapper>
            <Text size="body4">{item.date}</Text>
          </Wrapper>
        ))}
      </Box>
    </>
  );
};

export default PopupDataBox;
