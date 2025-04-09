import './PropertyList.css';

export default function PropertyList({ properties }) {
    return (
        <div className="property-list">
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h2>{property.name}</h2>
                        <p>
                            <strong>Rating:</strong> 
                            {Array.from({ length: 5 }, (_, i) => i < Math.round(property.rating) ? '⭐' : '⬛').join('')}
                        </p>
                        <p>
                            <strong>Price:</strong> ${property.price} per night
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}