import ApiCalendar from 'react-google-calendar-api';

export const config = {
  clientId: process.env.REACT_APP_GOOGLE_SPREADSHEETS_OAUTH as string,
  apiKey: 'AIzaSyCG3AsgricgCcZ21PfDDoHLt2MHNkA9bLU' as string,

  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
  plugin_name: 'CALENDAR_WITH_WEATHER',
};

export const apiCalendar = new ApiCalendar(config);
