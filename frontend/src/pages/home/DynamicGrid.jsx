import React from 'react';
import HeroCard from '../../components/ItemHeroCard/HeroCard';
const DynamicGrid = ({ items }) => {
    const gridClass = [``, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-7`];

    return (
        <div className="grid gap-4">
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={`grid ${gridClass[item.length]}`}
                >
                    {item?.map((subItem, subIndex) => (
                        <div
                            key={subIndex}
                            className="p-2 rounded h-full"
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
