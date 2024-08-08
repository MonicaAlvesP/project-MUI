import { useCallback, useContext, useState } from 'react';
import { createContext, ReactNode } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions?: IDrawerOption[];
  setDrawerOptions?: (newDrawerOption: IDrawerOption[]) => void;
  // o setDrawerOptions é uma função que recebe um array de IDrawerOption e não retorna nada.
  // o newDrawerOption é um array de IDrawerOption.
  // o IDrawerOption é uma interface que define a estrutura dos dados que podem ser passados para o Drawer.
  // o IDrawerOption é um objeto que contém as seguintes propriedades:
  // o icon é uma string que representa o ícone do Drawer.
  // o path é uma string que representa o caminho do Drawer.
  // o label é uma string que representa o rótulo do Drawer.
}

const DrawerContext = createContext<IDrawerContextData>({} as IDrawerContextData);

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface AppThemeProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  // o drawerOptions é um array de IDrawerOption.
  // o IDrawerOption é uma interface que define a estrutura dos dados que podem ser passados para o Drawer.

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []
    // o toggleDrawerOpen é uma função que alterna o estado do Drawer.
    // entre aberto e fechado.
  );

  const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOption);
  }, []
    // o handleSetDrawerOptions é uma função que recebe um array de IDrawerOption e altera o estado do DrawerOptions.
  );


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
}
