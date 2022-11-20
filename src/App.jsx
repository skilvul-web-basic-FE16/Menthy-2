import Login from './components/Login'
import  { BrowserRouter, Routes, Route} from 'react-router-dom'
import Registrasi from './components/Registrasi'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registrasi' element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
