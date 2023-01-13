import { Gapi } from '@/types/eventTypes';

export {};

declare global {
  interface Window {
    gapi: Gapi;
  }
}
