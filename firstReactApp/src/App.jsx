import './App.css'

import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import DoubleDiceDynamic from './DoubleDiceDynamic'
import Heading from './Heading'
import ColorList from './ColorList'

function App() {

  return (
    <>
      <h1 style={{ color: 'black', padding: '10px', borderRadius: '5px', textAlign: 'center', fontSize: '4.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        React Vite Tutorial
      </h1>
      
      <div className="card">
        <h3 className="section-header">Chicken Function</h3>
        <Chicken />
      </div>

      <div className="card">
        <h3 className="section-header">Greeter Function</h3>
        <Greeter name="James" from="Somebody" />
      </div>

      <div className="card">
        <h3 className="section-header">Dungeons & Dragons Dice</h3>
        <Die numDice={3} numSides={6} />
        <Die numDice={10} numSides={4} />
        <Die numDice={2} numSides={20} />
        <Die numDice={1} numSides={100} />
      </div>

      <div className="card">
        <h3 className="section-header">List Picker</h3>
        <ListPicker values={[1, 2, 3]} />
        <ListPicker values={['a', 'b', 'c']} />
      </div>

      <div className="card">
        <h3 className="section-header">Double Dice</h3>
        <DoubleDice />
      </div>

      <div className="card">
        <h3 className="section-header">Dynamic Double Dice</h3>
        <DoubleDiceDynamic />
      </div>

      <div className="card">
        <h3 className="section-header">Heading</h3>
        <Heading color="yellow" text="Sample Header" />
      </div>

      <div className="card">
        <h3 className="section-header">Color List</h3>
        <ColorList colors={['pink', 'red', 'orange', 'green', 'indigo', 'violet']}/>
      </div>
    </>
  )
}

export default App