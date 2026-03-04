
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

  const playersPromise = fetchPlayers()
  return (
    <>

      <Navbar></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center '>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-bold'>
          <button className='py-3 px-4 border-1 border-gray-400 rounded-l-2xl boder-r-0 bg-green-300'>Available</button>
          <button className='py-3 px-4 border-1 border-l-0 border-gray-400 rounded-r-2xl'>Selected <span>(0)</span></button>
        </div>
      </div>
     
      <Suspense fallback={<h3 className="max-w-[1200px] mx-auto"><span className="loading loading-spinner loading-xl"></span></h3>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
