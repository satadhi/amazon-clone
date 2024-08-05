import React from 'react';
import Item from './Item';
import { useLocation } from 'react-router-dom';
import { setCheckoutProductList, getCheckoutProductList } from '../../../handler/localstorage';

function LeftSide() {


  // maybe we need api call to save the item that is added in the cart
  let itemList = getCheckoutProductList();
  let newItem = useLocation().state.addToBasket;

  // new items is added
  if (newItem && itemList.length) {
    let isPresent = itemList.find(ele => ele.id == newItem.id)

    if (!isPresent) {
      setCheckoutProductList(newItem);
      itemList = [newItem, ...itemList];
    }

    // newItem present by no previous item found
  } else if (newItem && !itemList.length) {
    itemList.push(newItem);
    setCheckoutProductList(newItem);
  }

  console.log('get the left side of', itemList)

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

          {itemList.map((itemDetail => <Item data={itemDetail} />))}

          {/* <Item /> */}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
