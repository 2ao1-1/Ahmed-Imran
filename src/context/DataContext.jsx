import { createContext, useContext } from 'react';
import { Data } from '../Data';

const DataContext = createContext();

function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ ...Data }}>{children}</DataContext.Provider>
  );
}

function useInfo() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error('DataContext was used outside the context Provider');
  return context;
}
export { DataProvider, useInfo };
