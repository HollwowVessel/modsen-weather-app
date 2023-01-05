export type visualCrossingHour = {
  temp: number;
  feelslike: number;
  icon: string;
  [key: string]: any;
};

export type visualCrossingDay = {
  temp: number;
  icon: string;
  hours: visualCrossingHour[];
  [key: string]: any;
};

export type visualCrossingData = {
  resolvedAddress: string;
  address: string;
  days: visualCrossingDay[];
  [key: string]: any;
};
