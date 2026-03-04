
import { Suspense } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
 }

function App() {

const playersPromise= fetchPlayers()
  return (
    <>

      <Navbar></Navbar>
      
      <Suspense fallback={<h3 className="max-w-[1200px] mx-auto"><span className="loading loading-spinner loading-xl"></span></h3>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
