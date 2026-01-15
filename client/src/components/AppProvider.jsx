import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [checking, setChecking] = useState(false);

  return (
    <AppContext.Provider value={{ downloading, setDownloading, downloadError, setDownloadError, checking, setChecking }}>
      {children}
    </AppContext.Provider>
  );
}
