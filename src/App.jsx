import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'
import Sewa from './pages/sewa'
import Detail from './pages/Detail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cari' element={<Sewa />} />
    <Route path="/cari/detail/:id" element={<Detail />} />
    </Routes>
    </>
  )
}

export default App
