import './App.css'



import Mediatheque from "./pages/Mediatheque"
import Film from "./pages/Film"
import Accueil from "./pages/Accueil"
import Catalogue from './pages/Catalogue'

import Acteur from './pages/profils/Acteur'
import Realisateur from './pages/profils/Realisateur'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/mediatheque" element={<Mediatheque />} />
              <Route path="/catalogue" element={<Catalogue/>}/>

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
