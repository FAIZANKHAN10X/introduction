import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Fixes the "no-explicit-any" error by being more specific
declare global {
  interface Window {
    gtag: (
      command: string,
      id: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-PF2ZK2WQJD", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
