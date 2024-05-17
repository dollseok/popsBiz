import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import DateInput from '../../Common/DateInput';
import { useEffect, useState } from 'react';
import DayTimeInput from '../../Common/DayTimeInput';
import { useRecoilState } from 'recoil';
import { popupBasicDataState } from '@/states/Popup';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import { TIME_LIST } from '@/constants/defaultTimeData';

// 타입
export interface TimeStartEnd {
  date: string;
  startTime: string;
  endTime: string;
  closed: boolean;
}

const DateTimeInputComp = () => {
  const [popupData, setPopupData] = useRecoilState(popupBasicDataState);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const timeList = TIME_LIST;

  const [tabState, setTabState] = useState<boolean>(false);

  const handleDetailTime = () => {
    setTabState(!tabState);
    console.log(startTime);
    console.log(endTime);
    console.log(popupData);
  };

  useEffect(() => {
    setPopupData(prevData => {
      return {
        ...prevData,
        time: prevData.time.map(day => ({
          ...day,
          startTime: startTime,
        })),
      };
    });
  }, [startTime]);

  useEffect(() => {
    setPopupData(prevData => {
      return {
        ...prevData,
        time: prevData.time.map(day => ({
          ...day,
          endTime: endTime,
        })),
      };
    });
  }, [endTime]);

  return (
    <>
      <Wrapper $marginBottom="40px">
        <Text size="body1" $fontWeight="bold" $marginBottom="15px">
          기간 / 시간 (Date and Time)
        </Text>
        <Wrapper option="Row">
          <DateInput content="시작일" selectData="startDate" />
          <DateInput content="마감일" selectData="endDate" />
          <Wrapper $marginLeft="35px">
            <Text size="body3" $marginBottom="5px">
              운영시간
            </Text>
            <Wrapper option="Row">
              <Dropdown
                selectData={timeList}
                placeholder={'시작 시간'}
                content={'timeInput'}
                disabled={tabState}
                setFn={setStartTime}
                value={startTime}
              />
              <Dropdown
                selectData={timeList}
                placeholder={'종료 시간'}
                content={'timeInput'}
                disabled={tabState}
                setFn={setEndTime}
                value={endTime}
              />
              <Button
                option="blueTextButton"
                size="textSize"
                onClick={handleDetailTime}
              >
                상세 설정
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        {/* 시간 상세 설정 파트 */}
        {tabState ? (
          <Wrapper option="Row" $marginTop="25px">
            {popupData.time.map((day, index) => (
              <DayTimeInput key={index} index={index} timeData={day} />
            ))}
          </Wrapper>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export default DateTimeInputComp;
