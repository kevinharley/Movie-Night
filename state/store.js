import { createContext, useContext, useState } from 'react';

export const appContext = createContext([
  [],
  (obj) => obj
]);
export function AppWrapper({ children }) {
  let movieState = useState([]);

  return (
    <appContext.Provider value={movieState}>
      {children}
    </appContext.Provider>
  )
}

export function useappContext() {
  return useContext(appContext);
}
