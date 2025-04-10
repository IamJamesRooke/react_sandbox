import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function randomEmoji() {
    const faceEmojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", 
        "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", 
        "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", 
        "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", 
        "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖"
    ];

    return faceEmojis[Math.floor(Math.random() * faceEmojis.length)];
}

export default function EmojiClicker() {
    
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...emojis, { id: uuid(), emoji: randomEmoji() }]);
    }

    const deleteEmoji = (id) => {

        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }
  
    return (
    <div>

        <button onClick={addEmoji}>Add Emoji</button>
        <br></br>

        {emojis.map(e => (
            <span 
                onClick={() => deleteEmoji(e.id)} 
                key={e.id} 
                style={{ fontSize: '4rem', cursor: 'pointer' }}
            >
                {e.emoji}
            </span> 
        ))}

    </div>
  )
}
