import Box from './Box';
import BoxGrid from './BoxGrid';
import LuckyN from './LuckyN';
import { sum } from './utils'

// function Lucky7(dice) {
//   return sum(dice) === 7;
// }

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every( (v) => v === dice[0])
// }

export default function App() {
  return (
    <>
      {/* <LuckyN winCheck={Lucky7} title="Lucky7"/>
      <LuckyN winCheck={allSameValue} title="All the Same"/>
      <LuckyN winCheck={lessThan4} title="Less Than 4"/> */}

      <BoxGrid/>
    </>
  );
}