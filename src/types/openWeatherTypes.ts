export interface ReverseGeocodingCoords {
  lat: number;
  lon: number;
}

export interface ReverseGeocodingType {
  name: string;
  [key: string]: unknown;
}

export interface ListItem {
  temp: number;
  icon: string;
  [key: string]: unknown;
}

export interface DailyWeather {
  list: ListItem[];
  name: string;
  [key: string]: unknown;
}
