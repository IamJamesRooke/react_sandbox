import './App.css'
import Counter from './Counter';
import Dumbo from './Dumbo';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper from './ScoreKeeper';

function App() {

  return (
    <>
    <h1>State Demo</h1>
    <hr></hr>
    <Counter/>
    <hr></hr>
    <Dumbo/>
    <hr></hr>
    <ScoreKeeper numPlayers={6}/>
    <hr></hr>
    <EmojiClicker/>
    </>
  );
}

export default App
