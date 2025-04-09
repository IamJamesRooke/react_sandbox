import './App.css'

import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'

function App() {

  return (
    <>
      <h3 className="section-header">Chicken Function</h3>
      <Chicken/>

      <h3 className="section-header">Greeter Function</h3>
      <Greeter name="James" from="Somebody"/>

      <h3 className="section-header">Dungeons & Dragons Dice</h3>
      <Die numDice = {3} numSides={6}/>
      <Die numDice = {10} numSides={4}/>
      <Die numDice = {2} numSides={20}/>
      <Die numDice = {1} numSides={100}/>

      <h3 className="section-header">List Picker</h3>
      <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={['a', 'b', 'c']}/>

      <h3 className="section-header">Double Dice</h3>
      <DoubleDice/>


    </>
  )
}

export default App
