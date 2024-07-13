import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useParams } from 'react-router';
import PopupDataBox from '@/components/molecules/MainPage/Popup/PopupList/PopupDataBox';
import { Box } from '@/components/atoms/Box/Box';
import TicketListItemComp from '@/components/molecules/MainPage/Popup/PopupList/TicketListItemComp';

const PopupDetailComp = () => {
  const { id } = useParams<{ id: string }>();
  const CommentData = { title: '실시간 댓글', cnt: 10, id: 2 };
  const InquiryData = { title: '문의/요청', cnt: 10, id: 3 };

  const tmpTicketDataList = [
    {
      id: 1,
      title: '10% 할인 티켓',
      soldTicket: 1000,
      usedTicket: 0,
      registDate: '2024/06/10',
      status: '사용',
    },
    {
      id: 2,
      title: '10% 할인 티켓',
      soldTicket: 1000,
      usedTicket: 0,
      registDate: '2024/06/10',
      status: '사용',
    },
  ];

  return (
    <>
      <Wrapper>
        <Text size="heading" $fontWeight="bold">
          정보 관리(Dashboard)
        </Text>
        <Wrapper option="Row">
          <Text size="body4">팝업명</Text>
          <Text size="subtitle">[popup title]</Text>
          <>{id}</>
        </Wrapper>

        {/* 팝업 목록 정보 */}
        <Wrapper option="Center">
          <Box $option="shadowBox" $width="590px">
            <Wrapper option="RowSideEnd">
              <Wrapper option="Center">
                <Text $marginBottom="10px">팝업 조회</Text>
                <Wrapper option="Row">
                  <Text>총</Text>
                  <Text
                    size="heading"
                    $fontWeight="bold"
                    $marginLeft="8px"
                    $marginRight="5px"
                  >
                    5
                  </Text>
                  <Text>개</Text>
                </Wrapper>
              </Wrapper>
              <Box $option="shortColBox"></Box>
              <Wrapper option="Center">
                <Text $marginBottom="10px">위시리스트 저장</Text>
                <Wrapper option="Row">
                  <Text>총</Text>
                  <Text
                    size="heading"
                    $fontWeight="bold"
                    $marginLeft="8px"
                    $marginRight="5px"
                  >
                    5
                  </Text>
                  <Text>개</Text>
                </Wrapper>
              </Wrapper>
              <Box $option="shortColBox"></Box>
              <Wrapper option="Center">
                <Text $marginBottom="10px">공유하기</Text>
                <Wrapper option="Row">
                  <Text>총</Text>
                  <Text
                    size="heading"
                    $fontWeight="bold"
                    $marginLeft="8px"
                    $marginRight="5px"
                  >
                    5
                  </Text>
                  <Text>개</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Box>
        </Wrapper>

        <Wrapper option="RowSideEnd" $marginTop="25px">
          <PopupDataBox data={CommentData} />
          <PopupDataBox data={InquiryData} />
        </Wrapper>
        <Wrapper $marginTop="40px">
          <Wrapper option="PopupListNavRow">
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold">
                제목
              </Text>
            </Box>
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold">
                판매 수
              </Text>
            </Box>
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold">
                사용 수
              </Text>
            </Box>
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold">
                등록 날짜
              </Text>
            </Box>
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold">
                상태
              </Text>
            </Box>
            <Box $option="popupNavBox">
              <Text size="body3" $fontWeight="bold"></Text>
            </Box>
          </Wrapper>
        </Wrapper>

        {/* 티켓 리스트 */}
        {tmpTicketDataList.map((item, idx) => (
          <TicketListItemComp data={item} key={idx} />
        ))}
      </Wrapper>
    </>
  );
};

export default PopupDetailComp;
