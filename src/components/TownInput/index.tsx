import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch } from 'store';
import { getWeather } from 'store/actionCreators';
import {
  FixedBox,
  Town,
  TownButton,
  TownHeading,
  TownInputContainer,
} from './styled';
import { TownInputProps } from './types';

export function TownInput({ handlePopup }: TownInputProps) {
  const [town, setTown] = useState('');
  const dispatch = useAppDispatch();

  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTown = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTown(e.target.value);
  };

  const handleSearch = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!town.length) return;
    if ('key' in e && e.key !== 'Enter') return;

    if (/\d/.test(town)) return alert("Town name isn't correct");
    dispatch(getWeather(town));
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
          data-cy="town-input"
        />
        <TownButton type="button" onClick={handleSearch} data-cy="town-submit">
          Search
        </TownButton>
      </TownInputContainer>
    </FixedBox>,
    document.body
  );
}
