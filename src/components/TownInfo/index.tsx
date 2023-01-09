import { TownInput } from 'components/TownInput';

import { useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from 'store';
import { weekWeatherSelector } from 'store/selectors';
import { Country, ShowInput, Town, TownInfoContainer } from './styled';

export default function TownInfo() {
  const info = useAppSelector(weekWeatherSelector, shallowEqual);
  const { address, resolvedAddress } = info;
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <TownInfoContainer>
      <Town>{resolvedAddress?.split(',').at(-1)}</Town>
      <Country>{address}</Country>
      <ShowInput onClick={handlePopup}>Change town</ShowInput>
      {showPopup && <TownInput handlePopup={handlePopup} />}
    </TownInfoContainer>
  );
}
