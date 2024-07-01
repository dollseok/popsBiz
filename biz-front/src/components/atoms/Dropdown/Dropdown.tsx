import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import Input from '../Input/Input';
import { Box } from '../Box/Box';
import Button from '../Button/Button';

interface DropdownPropsType<T> {
  selectData: T[];
  placeholder?: string;
  content?: 'timeInput' | 'siteInput' | 'ticketDataInput' | 'ticketTimeInput';
  disabled?: boolean;
  $width?: string;
  $top?: string;
  value: T;
  setFn: Dispatch<SetStateAction<T>>;
}

const Dropdown = <T extends string | number>(props: DropdownPropsType<T>) => {
  const dataList = props.selectData;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const handleSelect = (data: T) => {
    props.setFn(data);
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
    <Wrapper option="Center">
      <Input
        $readonly={true}
        $inputsize={props.content}
        type="text"
        placeholder={props.placeholder}
        disabled={props.disabled}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        value={props.value}
        onChange={e => props.setFn(e.target.value as T)}
      ></Input>
      {isOpen && (
        <Box $option="dropdown" $top={props.$top} ref={dropRef}>
          <>
            {dataList.map((data, idx) => (
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
