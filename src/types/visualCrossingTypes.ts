export type visualCrossingHour = {
  temp: number;
  feelslike: number;
  icon: string;
  [key: string]: unknown;
};

export type visualCrossingDay = {
  temp: number;
  icon: string;

  [key: string]: unknown;
};

export type visualCrossingData = {
  resolvedAddress: string;
  address: string;
  days: visualCrossingDay[];
  [key: string]: unknown;
};
