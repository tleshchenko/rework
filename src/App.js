import React from 'react';
import { StrictMode } from 'react';
import './style/reset.css'
import './style/main.scss'
import MainContent from './pages/main';
import DefaultLayout from './layouts/default_layout';
import { Route, Routes } from 'react-router-dom';
import MovieItem from './pages/movie';

import { ThemeProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './components/theme/themeContextProvider';


function App() {
  const { theme } = useThemeContext();

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MainContent />} />
            <Route path='item/:id' element={<MovieItem />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;