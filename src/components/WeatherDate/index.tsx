import { SECOND } from 'constants/weatherDate';
import { useEffect, useRef, useState } from 'react';
import { dateCreator } from 'utils/dateCreator';
import { timeCreator } from 'utils/timeCreator';
import { DateContainer, DateInfo, TimeInfo } from './styled';

export function WeatherDate() {
  const [time, setTime] = useState<string>(timeCreator());
  const [date] = useState<string>(dateCreator());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setTime(timeCreator()), SECOND);

    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  return (
    <DateContainer>
      <TimeInfo>{time}</TimeInfo>
      <DateInfo>{date}</DateInfo>
    </DateContainer>
  );
}
