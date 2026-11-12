import './App.css'

import Navbar from './composants/navbar'
import Footer from './composants/footer'

import Mediatheque from "./pages/Mediatheque"
import Film from "./pages/Film"
import Accueil from "./pages/Accueil"

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/mediatheque" element={<Mediatheque />} />
              <Route path="/film/:id" element={<Film />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div >
    </BrowserRouter>

  )
}

export default App
