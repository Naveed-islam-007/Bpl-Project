import { Suspense } from 'react'
import './App.css'
import Players from './components/Homepage/Players/Players'
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch("/player.json")
  return res.json()
}

function App() {
  const playerPromise = fetchPlayer()
  
  return (
    <>
      <Navbar />
      <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App