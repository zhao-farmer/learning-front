interface Window {
  electronAPI: {
    nodeVersion:string,
    chromeVersion:string,
    electronVersion:string,
    saveFile: (systemPath: string, data?: any) => void,
    readFile: (systemPath: string) => Promise<string>
  }
}