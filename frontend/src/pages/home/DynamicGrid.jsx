import React from 'react';
import HeroCard from '../../components/ItemHeroCard/HeroCard';
import { useNavigate } from 'react-router-dom';

const DynamicGrid = ({ items }) => {
    const gridClass = [``, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-7`];

    const navigate = useNavigate();

    const handleItemDetailsClick = (event) => {
        // Get the closest div to the clicked target that has the data-item-details-id attribute
        const closestDivWithAttribute = event.target.closest('[data-item-details-id]');

        // Check if such a div was found and get its data attribute value
        if (closestDivWithAttribute) {
            const itemDetailsId = closestDivWithAttribute.getAttribute('data-item-details-id');
            console.log('Data item details ID:', itemDetailsId);
            navigate(`/itemdetail?product=${itemDetailsId}`)
        } else {
            console.log('No div with data-item-details-id found');
        }
    }
    return (

        <div className="grid gap-4" onClick={handleItemDetailsClick}>
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={`grid ${gridClass[item.length]}`}
                >
                    {item?.map((subItem, subIndex) => (
                        <div
                            key={subIndex}
                            className="p-2 rounded h-full"
                            data-item-details-id={`${subItem.id}`}
                        >
                            <HeroCard data={subItem} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Example usage
const App = ({ listOfListOfItems }) => {



    return (
        <div>
            <DynamicGrid items={listOfListOfItems} />
        </div>
    );
};

export default App;
