import { Box } from '@/components/atoms/Box/Box';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import PopupListItemComp from '@/components/molecules/MainPage/Popup/PopupList/PopupListItemComp';
import { IoSearch } from 'react-icons/io5';

const PopupListComp = () => {
  const tmpPopupDataList = [
    {
      id: 1,
      image: '이미지링크',
      title: '업사이클링 클럽 UPcycling club in seongsu',
      address: '서울시 성동구 영동대로 209-02 현대백화점  2층',
      startday: '2024/08/17',
      endday: '2024/08/30',
      category: '팝업스토어',
      soldTicket: 1500,
      totalTicket: 2000,
      registDate: '2024/06/30',
      status: '운영 종료',
    },
    {
      id: 2,
      image: '이미지링크',
      title: '인스타툰 하우스',
      address: '서울시 성동구 영동대로 209-02 현대백화점  2층',
      startday: '2024/08/17',
      endday: '2024/08/30',
      category: '팝업스토어',
      soldTicket: 1500,
      totalTicket: 2000,
      registDate: '2024/06/30',
      status: '운영 중',
    },
  ];

  return (
    <>
      <Wrapper option="RowSideEnd">
        <Text size="heading" $fontWeight="bold">
          팝업 목록
        </Text>
        <Button size="small">팝업 등록</Button>
      </Wrapper>

      {/* 팝업 목록 정보 */}
      <Box $option="shadowBox">
        <Wrapper option="RowSideEnd">
          <Wrapper option="Center">
            <Text $marginBottom="10px">등록된 팝업</Text>
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
            <Text $marginBottom="10px">운영 중</Text>
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
            <Text $marginBottom="10px">임시 저장</Text>
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
            <Text $marginBottom="10px">검토 필요</Text>
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

      {/* 검색 바 */}
      <Box $option="searchBox">
        <IoSearch size={20} />
        <Input
          type="text"
          option="transparent"
          placeholder="팝업 제목, 브랜드명을 입력해주세요."
        ></Input>
      </Box>

      <Wrapper option="Row" $marginTop="7px">
        <label htmlFor="status-operating">운영 중</label>
        <input
          type="checkbox"
          id="status-operating"
          name="status-operating"
          // checked={freeChecked}
          // onChange={e => handleChange(e)}
        ></input>
        <label htmlFor="status-ended">운영 종료</label>
        <input
          type="checkbox"
          id="status-ended"
          name="status-ended"
          // checked={freeChecked}
          // onChange={e => handleChange(e)}
        ></input>
        <label htmlFor="status-hidden">숨김</label>
        <input
          type="checkbox"
          id="status-hidden"
          name="status-hidden"
          // checked={freeChecked}
          // onChange={e => handleChange(e)}
        ></input>
        <label htmlFor="status-draft">임시 저장</label>
        <input
          type="checkbox"
          id="status-draft"
          name="status-draft"
          // checked={freeChecked}
          // onChange={e => handleChange(e)}
        ></input>
        <label htmlFor="status-review">검토 필요</label>
        <input
          type="checkbox"
          id="status-review"
          name="status-review"
          // checked={freeChecked}
          // onChange={e => handleChange(e)}
        ></input>
      </Wrapper>
      {/* 리스트 헤더 */}
      <Wrapper $marginTop="40px">
        <Wrapper option="PopupListNavRow">
          <Box $option="popupNavBox">
            <Text size="body3" $fontWeight="bold">
              팝업 정보
            </Text>
          </Box>
          <Box $option="popupNavBox">
            <Text size="body3" $fontWeight="bold">
              카테고리
            </Text>
          </Box>
          <Box $option="popupNavBox">
            <Text size="body3" $fontWeight="bold">
              티켓 현황
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
      {/* 리스트 */}
      {tmpPopupDataList.map((item, idx) => (
        <PopupListItemComp data={item} key={idx} />
      ))}
    </>
  );
};

export default PopupListComp;
