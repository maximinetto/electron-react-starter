// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { IpcRendererEvent, contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  setURL: (callback: (event: IpcRendererEvent, url: string) => void) => {
    ipcRenderer.on("set-url", callback);
  },
});
