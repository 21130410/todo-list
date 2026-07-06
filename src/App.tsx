
import Home from './pages/HomePage/Home'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <div className='bg-gray-600 h-screen '>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
