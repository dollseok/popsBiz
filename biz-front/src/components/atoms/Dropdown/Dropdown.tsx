import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Input from '../Input/Input';
import { Wrapper } from '../Wrapper/Wrapper';
import { Box } from '../Box/Box';
import Button from '../Button/Button';
import { TIME_LIST } from '@/constants/defaultTimeData';

interface TimeInputPropsType {
  content: string;
  disabled: boolean;
  defaultValue: string;
  setFn: Dispatch<SetStateAction<string>>;
}

const Dropdown = (data: TimeInputPropsType) => {
  const timeList = TIME_LIST;

  const [inputValue, setInputValue] = useState<string>(data.defaultValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const handleSelect = (time: string) => {
    setInputValue(time);
    data.setFn(time);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper $marginRight="15px" option="Center">
      <Input
        $inputsize="timeInput"
        type="text"
        placeholder={data.content}
        disabled={data.disabled}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></Input>
      {isOpen && (
        <Box $option="dropdown" ref={dropRef}>
          <>
            {timeList.map((data, idx) => (
              <Button
                key={idx}
                option="textButton"
                size="small"
                onClick={() => {
                  handleSelect(data);
                }}
              >
                {data}
              </Button>
            ))}
          </>
        </Box>
      )}
    </Wrapper>
  );
};

export default Dropdown;
