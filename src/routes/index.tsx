import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts/';
import { useEffect } from 'react';
import { Dashboard, ListagemDeCidades } from '../pages';

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    if (setDrawerOptions) {
      setDrawerOptions([
        {
          label: 'Página Inicial',
          icon: 'home',
          path: '/pagina-inicial'
        },
        {
          icon: 'location_city',
          label: 'Cidades',
          path: '/cidades'
        }
      ]);
    }
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />
      <Route path='/cidades' element={<ListagemDeCidades />} />
      {/* <Route path='/cidades/detalhe/:id' element={<Cidades />} /> */}

      <Route path='*' element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}