import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  return (
    <AppContext.Provider value={{ downloading, setDownloading, downloadError, setDownloadError }}>
      {children}
    </AppContext.Provider>
  );
}
