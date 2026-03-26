import { Suspense, useState } from 'react'
import './App.css'
import Players from './components/Homepage/Players/Players'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const playerPromise = fetchPlayer() 

async function fetchPlayer() {
  const res = await fetch("/player.json")
  return res.json()
}

function App() {
  const [coin, setCoin] = useState(5000000000)
  
  return (
    <>
      <Navbar coin={coin}/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}/>
      </Suspense>



      <ToastContainer></ToastContainer>
    </>
  )
}

export default App