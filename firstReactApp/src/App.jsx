import './App.css';

import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import DoubleDiceDynamic from './DoubleDiceDynamic';
import Heading from './Heading';
import ColorList from './ColorList';
import SlotMachine from './Slots';
import ShoppingList from './ShoppingList';
import Card from './Card';
import Header from './Header';
import shoppingData from './shoppingData'; // Import the data
import BitcoinGraph from './BitcoinGraph'; // Import the BitcoinGraph component
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';

const properties = [
  {id: 129031, name: "Desert Yurt", rating: 3.5, price: 150},
  {id: 129032, name: "Mountain Cabin", rating: 4.5, price: 250},
  {id: 129033, name: "City Apartment", rating: 5, price: 300},
  {id: 129034, name: "Beach House", rating: 2, price: 400},
];

function App() {
  return (
    <>
      <Header text="React Vite Tutorial" />

      <Card title="Form">
        <Form/>
      </Card>

      <Card title="Clicker">
        <Clicker/>
      </Card>


      <Card title="Chicken Function">
        <Chicken />
      </Card>

      <Card title="Greeter Function">
        <Greeter name="James" from="Somebody" />
      </Card>

      <Card title="Dungeons & Dragons Dice">
        <Die numDice={3} numSides={6} />
        <Die numDice={10} numSides={4} />
        <Die numDice={2} numSides={20} />
        <Die numDice={1} numSides={100} />
      </Card>

      <Card title="List Picker">
        <ListPicker values={[1, 2, 3]} />
        <ListPicker values={['a', 'b', 'c']} />
      </Card>

      <Card title="Double Dice">
        <DoubleDice />
      </Card>

      <Card title="Dynamic Double Dice">
        <DoubleDiceDynamic />
      </Card>

      <Card title="Heading">
        <Heading color="yellow" text="Sample Header" />
      </Card>

      <Card title="Color List">
        <ColorList colors={['pink', 'red', 'orange', 'green', 'indigo', 'violet']} />
      </Card>

      <Card title="Slot Machine">
        <SlotMachine />
      </Card>

      <Card title="Shopping List">
        <ShoppingList items={shoppingData} /> {/* Use the imported data */}
      </Card>

      <Card title="Bitcoin Graph">
        <BitcoinGraph /> {/* Add the BitcoinGraph component here */}
      </Card>
      
      <Card title="Property List">
        <PropertyList properties={properties}/>
      </Card>
      

    </>
  );
}

export default App;