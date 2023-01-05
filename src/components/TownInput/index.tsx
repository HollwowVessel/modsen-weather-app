import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { getWeekWeather } from 'store/actionCreators';
import {
  FixedBox,
  Town,
  TownButton,
  TownHeading,
  TownInputContainer,
} from './styled';

interface TownInputProps {
  handlePopup: () => void;
}

export function TownInput({ handlePopup }: TownInputProps) {
  const [town, setTown] = useState('');
  const dispatch = useDispatch();

  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTown = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTown(e.target.value);
  };

  const handleSearch = (
    e:
      | React.MouseEventHandler<HTMLButtonElement>
      | React.KeyboardEventHandler<HTMLInputElement>
      | any
  ) => {
    if (!town.length) return;
    if (e?.key && e.key !== 'Enter') return;
    dispatch(getWeekWeather(town));
    handlePopup();
  };

  return createPortal(
    <FixedBox onClick={handlePopup}>
      <TownInputContainer onClick={handlePropagation}>
        <TownHeading>Input a town!</TownHeading>
        <Town
          value={town}
          maxLength={20}
          onChange={handleTown}
          onKeyUp={handleSearch}
        />
        <TownButton type="button" onClick={handleSearch}>
          Search
        </TownButton>
      </TownInputContainer>
    </FixedBox>,
    document.body
  );
}
