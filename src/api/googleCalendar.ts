import { googleApiKey, googleClientId } from 'constants/apiKeys';
import { googleCalendarLink, googleDiscoveryDocksLink } from 'constants/links';
import ApiCalendar from 'react-google-calendar-api';

export const config = {
  clientId: googleClientId,
  apiKey: googleApiKey,
  scope: googleCalendarLink,
  discoveryDocs: [googleDiscoveryDocksLink],
};

export const apiCalendar = new ApiCalendar(config);
