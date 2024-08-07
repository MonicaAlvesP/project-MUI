import { useCallback, useContext, useState } from 'react';
import { createContext, ReactNode } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext<IDrawerContextData>({} as IDrawerContextData);

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

interface AppThemeProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}
