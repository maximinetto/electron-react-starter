export interface IElectronAPI {
  setURL: (callback: (event: Event, url: string) => void) => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
