import { TownInput } from 'components/TownInput';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Country, ShowInput, Town, TownInfoContainer } from './styled';

export default function TownInfo() {
  const info = useSelector((state) => state.weekWeather.weather);
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
