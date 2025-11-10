import { Route, Routes } from 'react-router-dom'
import RegisterAdmin from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
   <>
   <Routes>
    <Route path='/register' element={<RegisterAdmin/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </>
  )
}

export default App
