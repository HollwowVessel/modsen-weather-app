import { Gapi } from '@/types/eventTypes';

interface Gapi {
  auth2: {
    init: (obj: object) => Promise<null>;
    getAuthInstance: () => GoogleAuthType;
  };
}

declare global {
  interface Window {
    gapi: Gapi;
  }
}
