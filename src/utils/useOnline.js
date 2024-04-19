import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  //Checking the network connection status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    console.log("Network Status: ", isOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);

      console.log("Removed event listeners");
    };
  });

  return isOnline;
};

export default useOnline;
