import { TimeStartEnd } from '../PopupRegist/BasicData/DateTimeInputComp';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { Text } from '@/components/atoms/Text/Text';
import { CheckBox } from '@/components/molecules/SignupPage/CheckBox';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { popupBasicDataState } from '@/states/Popup';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';

interface DayTimeInputPropsType {
  timeData: TimeStartEnd;
  index: number;
}

const DayTimeInput = (data: DayTimeInputPropsType) => {
  const [startTime, setStartTime] = useState<string>(data.timeData.startTime);
  const [endTime, setEndTime] = useState<string>(data.timeData.endTime);
  const setPopupData = useSetRecoilState(popupBasicDataState);

  const handleCheck = (index: number) => {
    setPopupData(prevData => {
      const updataTimeData = [...prevData.time];

      updataTimeData[index] = {
        ...updataTimeData[index],
        closed: !updataTimeData[index].closed,
      };

      return {
        ...prevData,
        time: updataTimeData,
      };
    });
  };

  // startTime 상세 변경
  const handleStartTime = (index: number, newStartTime: string) => {
    setPopupData(prevData => {
      const updataTimeData = [...prevData.time];

      updataTimeData[index] = {
        ...updataTimeData[index],
        startTime: newStartTime,
      };

      return {
        ...prevData,
        time: updataTimeData,
      };
    });
  };

  // endTime 상세 변경
  const handleEndTime = (index: number, newEndTime: string) => {
    setPopupData(prevData => {
      const updataTimeData = [...prevData.time];

      updataTimeData[index] = {
        ...updataTimeData[index],
        endTime: newEndTime,
      };

      return {
        ...prevData,
        time: updataTimeData,
      };
    });
  };

  useEffect(() => {
    handleStartTime(data.index, startTime);
  }, [startTime]);

  useEffect(() => {
    handleEndTime(data.index, endTime);
  }, [endTime]);

  return (
    <>
      <Wrapper $marginRight="10px">
        <Text size="body3" $marginBottom="5px">
          {data.timeData.date}
        </Text>
        <Dropdown
          content={'시작 시간'}
          disabled={data.timeData.closed}
          setFn={setStartTime}
          defaultValue={startTime}
        />
        <Dropdown
          content={'종료 시간'}
          disabled={data.timeData.closed}
          setFn={setEndTime}
          defaultValue={endTime}
        />
        <CheckBox
          checkBoxId={data.index}
          checked={data.timeData.closed}
          mention="휴일"
          handleCheck={() => {
            handleCheck(data.index);
          }}
        />
      </Wrapper>
    </>
  );
};

export default DayTimeInput;
