export interface EventDate {
  dateTime: string;
  [key: string]: unknown;
}

export interface Event {
  summary: string;
  start: EventDate | string;
  result?: unknown;
  [key: string]: unknown;
}

export interface GoogleAuthType {
  isSignedIn: {
    get: () => boolean;
  };
}

export interface Gapi {
  auth2: {
    init: (obj: object) => Promise<null>;
    getAuthInstance: () => GoogleAuthType;
  };
}
