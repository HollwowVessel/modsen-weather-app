import { useEffect, useMemo, useState } from 'react';

import { dateCreator } from '@/utils/dateCreator';
import { timeCreator } from '@/utils/timeCreator';

import { DateContainer, DateInfo, TimeInfo } from './styled';

export function WeatherDate() {
  const [time, setTime] = useState(() => timeCreator());
  const date = useMemo(() => dateCreator(), []);

  useEffect(() => {
    const interval = setInterval(() => setTime(timeCreator()), 1000);

    return () => clearInterval(interval as NodeJS.Timeout);
  }, []);

  return (
    <DateContainer>
      <TimeInfo>{time}</TimeInfo>
      <DateInfo>{date}</DateInfo>
    </DateContainer>
  );
}
