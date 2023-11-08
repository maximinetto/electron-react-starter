import { IpcRendererEvent } from "electron";

export interface IElectronAPI {
  setURL: (
    callback: (event: IpcRendererEvent, url: string) => void
  ) => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
