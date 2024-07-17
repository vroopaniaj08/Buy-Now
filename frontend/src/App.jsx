// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login> */}
      <Routes>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route exact path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </>
  )
}

export default App
