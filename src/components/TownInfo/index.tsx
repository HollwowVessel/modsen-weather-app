import { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { TownInput } from '@/components/TownInput';
import { useAppSelector } from '@/store';
import { weekWeatherSelector } from '@/store/selectors';

import { Country, ShowInput, Town, TownInfoContainer } from './styled';

export function TownInfo() {
  const { address, resolvedAddress } = useAppSelector(
    weekWeatherSelector,
    shallowEqual
  );

  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = useCallback(() => {
    setShowPopup((prev) => !prev);
  }, []);

  return (
    <TownInfoContainer>
      <Town data-cy="town">{resolvedAddress}</Town>
      <Country data-cy="address">{address}</Country>
      <ShowInput onClick={handlePopup} data-cy="change-town-btn">
        Change town
      </ShowInput>
      {showPopup && <TownInput handlePopup={handlePopup} />}
    </TownInfoContainer>
  );
}
