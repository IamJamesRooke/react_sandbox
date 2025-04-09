import './ShoppingList.css';

export default function ShoppingList({ items }) {
    return (
        <ul className="shopping-list">
            {items.map((i) => (
                <li
                    key={i.item}
                    className={i.completed ? 'completed' : ''}
                >
                    <span className="item">{i.item.toUpperCase()}</span>
                    <span className="quantity">{i.quantity}</span>
                </li>
            ))}
        </ul>
    );
}