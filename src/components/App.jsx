import { useState } from 'react'
import './App.css'
import Breeds from './Breeds'
import Dogs from './Dogs'
import Mode from './Mode'
import UserContext from '../UserContext'

function App() {
  const [forCexatesak, setForCexatesak] = useState([])
  const [mode, setMode] = useState(true)

  function forBreeds(yntrvacBreeds) {
    setForCexatesak(yntrvacBreeds)
  }

  const forContext = {
    mode,
    setMode
  }
  return (
    <UserContext.Provider value={forContext}>
      <div className={mode ? "bg-white p-[25px]" : "bg-black p-[25px] rounded-[10px]"}>
        <Mode />
        <Breeds yntrvacBreeds={forBreeds} />
        <Dogs dogBreeds={forCexatesak} />
      </div>
    </UserContext.Provider>
  )
}

export default App
