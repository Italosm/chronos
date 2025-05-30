import { BrowserRouter, Routes, useLocation } from 'react-router';
import { Route } from 'react-router';
import { Home } from '../../Pages/Home';
import { NotFound } from '../../Pages/NotFound';
import { AboutPomodoro } from '../../Pages/AboutPomodoro';
import { useEffect } from 'react';
import { History } from '../../Pages/History';
import { Settings } from '../../Pages/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/history/' element={<History />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
