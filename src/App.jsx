import './App.css'
import { Route, Routes } from 'react-router-dom'
import { GalleryPage, LandingPage, QuizPage } from './pages'

function App() {

  return (
    <Routes>

      <Route index element={<LandingPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>

    </Routes>
  )
}

export default App
