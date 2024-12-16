import { useState } from 'react'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
     
    </>
  )
}

export default App
