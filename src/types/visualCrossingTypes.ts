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
