import Input from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { popupBasicDataState } from '@/states/Popup';
import { useSetRecoilState } from 'recoil';

interface DateInputProps {
  content: string;
  selectData: string;
}

const DateInput = (data: DateInputProps) => {
  const setPopupData = useSetRecoilState(popupBasicDataState);

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectData = data.selectData;

    if (selectData === 'startDate') {
      setPopupData(prevData => {
        return { ...prevData, startDate: e.target.value };
      });
    } else {
      setPopupData(prevData => {
        return { ...prevData, endDate: e.target.value };
      });
    }
    console.log(e.target.value);
  };

  return (
    <Wrapper $marginRight="10px">
      <Text size="body3" $marginBottom="5px">
        {data.content}
      </Text>
      <Input
        $inputsize="dateInput"
        type="date"
        onChange={e => {
          handleDate(e);
        }}
      ></Input>
    </Wrapper>
  );
};

export default DateInput;
