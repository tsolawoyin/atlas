import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [downloading, setDownloading] = useState(true); // this one is now for downloading
  const [downloadError, setDownloadError] = useState("");
  const [checkStatus, setCheckStatus] = useState("up-to-date");

  return (
    <AppContext.Provider
      value={{
        downloading,
        setDownloading,
        downloadError,
        setDownloadError,
        checkStatus,
        setCheckStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
