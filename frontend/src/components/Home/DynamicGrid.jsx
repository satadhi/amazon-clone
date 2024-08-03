import React from 'react';
import HeroCard from '../ItemHeroCard/HeroCard';
const DynamicGrid = ({ items }) => {
    const gridClass = [``, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-7`];

    return (
        <div className="grid gap-4">
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={`grid ${gridClass[item.length]} `}
                >
                    {item?.map((subItem, subIndex) => (
                        <div
                            key={subIndex}
                            className="p-2 rounded"
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

    console.log('dynamic grid')
    console.log(listOfListOfItems)
    const items = [
        ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 20'],
        ['Item 5', 'Item 6'],
        ['Item 7', 'Item 8', 'Item 9', 'Item 10'],
        ['Item 11', 'Item 12'],
    ];

    return (
        <div>
            <DynamicGrid items={listOfListOfItems} />
        </div>
    );
};

export default App;
