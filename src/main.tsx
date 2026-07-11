import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

import "./style.css"
import Index from './pages/index.tsx'
import About from './pages/about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* Nav */}
    <nav>
      <Link to='/'>Home</Link> |{' '}
      <Link to='/about'>About</Link>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
