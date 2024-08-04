import React from 'react';
import Item from './Item';

function LeftSide() {
  return (
    <div className='p-6 shadow-md'>
      <div>
        <h1 className='text-4xl font-semibold pb-4'>Shopping Cart</h1>
        <div className='text-sm flex gap-2'>
          <div>No Items selected</div>
          <div>select all items</div>
        </div>
      </div>
      <div className='flex-col mt-5'>
        {/* Array of items should be put here */}
        <div>
          {/* Single item */}
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
