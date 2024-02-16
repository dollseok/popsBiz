import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { useEffect, useState } from 'react';

interface TimerProps {
  resetTimer: boolean;
}

const Timer = ({ resetTimer }: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(1800);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (resetTimer) {
      setSeconds(1800);
      setIsActive(true);
    }
  }, [resetTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainSeconds
    ).padStart(2, '0')}`;
  };

  return (
    <>
      <Wrapper option="Center" $width="206px">
        <Text size="body4">{formatTime()}</Text>
      </Wrapper>
    </>
  );
};

export { Timer };
