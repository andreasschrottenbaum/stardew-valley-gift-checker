import { useState } from 'react'
import './App.scss'
import CitizenList from './components/CitizenList'

import Header from './components/Header'

function App() {
  const [player, setPlayer] = useState(localStorage.getItem('player') || '')

  //@ts-ignore
  console.log({ player, setPlayer })

  // const handlePlayerChange = (event: ChangeEvent) => {
  //   //@ts-ignore
  //   setPlayer(event.target?.value)
  // }

  const changePlayer = (newPlayer: any) => {
    console.log('PLAYER SELECT', newPlayer[0].name)
  }

  return (
    <div className='App'>
      <Header setPlayer={changePlayer} />
      <CitizenList />
    </div>
  )
}

export default App
