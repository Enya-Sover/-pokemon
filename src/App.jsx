import { useState, useEffect } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {
let [show, setShow] = useState(true)

  return (
    <div>
      <div className='pokemonImage'>
      <img className='pokemonHeader' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Här är det en bild" />
      <br /><br />
      </div>
      {show && <button className='start-app-button' onClick={()=> setShow(!show)}>Start Pokemon App</button>}
      {!show && <PokemonApplication />}
     
    </div>
  )
}

export default App
