import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts/';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    if (setDrawerOptions) {
      setDrawerOptions([
        {
          label: 'Página Inicial',
          icon: 'home',
          path: '/pagina-inicial'
        }
      ]);
    }
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />

      <Route path='*' element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}