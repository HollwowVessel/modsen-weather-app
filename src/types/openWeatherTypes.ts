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
  main?: {
    temp: number;
  };
  weather?: {
    icon: string;
  }[];
  [key: string]: unknown;
}

export interface DailyWeather {
  days: ListItem[];
  name: string;
  list?: ListItem[];
  [key: string]: unknown;
}

export interface DailyTown {
  city: string;
  [key: string]: unknown;
}
