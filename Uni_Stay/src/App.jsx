import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FooterPages from './components/Footer/FooterPages'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center" }}>Home Page</h1>} />
        <Route path="/other" element={<h1 style={{ textAlign: "center" }}>Other Page</h1>} />
      </Routes>

      {location.pathname === "/" ? <Footer /> : <FooterPages />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
