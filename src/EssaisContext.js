import React, { useState, createContext, useEffect } from "react";
// import useSwr from 'swr';

// Create Context Object
export const EssaiContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const EssaiContextProvider = props => {

  const [globalData, setGlobalData] = useState({
    selectedEssai:{},
    essais:[]
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/type_essais`)
      .then((response) => response.json())
      .then((json) => setGlobalData({...globalData,
        essais:json}
        )); 
    
  }, []);

  return (
    <EssaiContext.Provider value={[globalData, setGlobalData]}>
      {props.children}
    </EssaiContext.Provider>
  );
};