import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm"
import {v4 as uuid} from "uuid";

export default function ShoppingList() {
  
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 8},
        {id: uuid(), product: "Eggs", quantity: 12},
    ])

    const addItem = (item) => {
        if(!item.product) {
            return
        } else {
        setItems((currItems) => {
            return [...currItems, {...item, id: uuid()}];
        });
    }
    }
  
    return (
    <div>
        <h3>Shopping List</h3>
        <hr />
        <ShoppingListForm addItem={addItem}/>
        <hr />
        <ul>
            {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
        </ul>
        
    </div>
  )
}
