import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import Input from '../Input/Input';
import { Box } from '../Box/Box';
import Button from '../Button/Button';

interface DropdownPropsType {
  selectData: string[];
  placeholder?: string;
  content?: 'timeInput' | 'siteInput';
  disabled?: boolean;
  $width?: string;
  value: string;
  setFn: Dispatch<SetStateAction<string>>;
}

const Dropdown = (props: DropdownPropsType) => {
  const dataList = props.selectData;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const handleSelect = (data: string) => {
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
        $inputsize={props.content}
        type="text"
        placeholder={props.placeholder}
        disabled={props.disabled}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        value={props.value}
        onChange={e => props.setFn(e.target.value)}
      ></Input>
      {isOpen && (
        <Box $option="dropdown" ref={dropRef}>
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
