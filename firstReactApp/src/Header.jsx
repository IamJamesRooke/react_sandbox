import React from 'react';

export default function Header({ text }) {
    return (
        <h1
            style={{
                color: 'black',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                fontSize: '4.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            {text}
        </h1>
    );
}