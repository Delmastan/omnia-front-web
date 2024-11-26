import React, { useEffect } from "react";
import useDataStore from "../store/DataStore";

interface FetchLayoutProps {
  children: React.ReactNode;
}

const FetchLayout: React.FC<FetchLayoutProps> = ({ children }) => {
  const setData = useDataStore((state) => state.setData);
  const data = useDataStore((state) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/omnia");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };

    fetchData();
  }, [setData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default FetchLayout;
