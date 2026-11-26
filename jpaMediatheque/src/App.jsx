import './App.css'



import Mediatheques from "./pages/Mediatheques"
import Mediatheque from "./pages/Mediatheque"
import Film from "./pages/Film"
import Accueil from "./pages/Accueil"
import Catalogue from './pages/Catalogue'

import Acteur from './pages/profils/Acteur'
import Realisateur from './pages/profils/Realisateur'

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function OnPageChangeScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <OnPageChangeScrollToTop />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/mediatheques" element={<Mediatheques />} />
              <Route path="/mediatheque/:id" element={<Mediatheque />} />
              <Route path="/catalogue" element={<Catalogue />} />

              <Route path="/film/:id" element={<Film />} />
              <Route path="/profil/acteur/:code" element={<Acteur />} />
              <Route path="/profil/realisateur/:id" element={<Realisateur />} />
            </Routes>
          </main>
        </div>
      </div >
    </BrowserRouter>

  )
}

export default App
