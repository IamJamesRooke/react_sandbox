import React from 'react';

export default function Card({ title, children }) {
    return (
        <div className="card">
            <h3 className="section-header">{title}</h3>
            {children}
        </div>
    );
}