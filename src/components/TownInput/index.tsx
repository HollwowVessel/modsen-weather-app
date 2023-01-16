import React, { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import { getWeather, setLoad } from '@/actions';
import { useAppDispatch } from '@/store';

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

  const handlePropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleTown = (e: ChangeEvent<HTMLInputElement>) => {
    setTown(e.target.value);
  };

  const handleSearch = (
    e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => {
    if (!town.length) return;
    if ('key' in e && e.key !== 'Enter') return;

    dispatch(getWeather(town));
    dispatch(setLoad());
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
