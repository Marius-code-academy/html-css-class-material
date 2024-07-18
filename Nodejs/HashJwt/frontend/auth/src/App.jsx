import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/main' element={<MainPage />}/>
      </Routes>
    </div>
  )
}

export default App
