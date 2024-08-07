import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx'
import { DrawerProvider } from './shared/contexts/DrawerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>,
)
