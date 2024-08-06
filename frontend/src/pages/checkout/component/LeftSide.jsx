import React, { useContext } from 'react';
import Item from './Item';
import { useLocation } from 'react-router-dom';
import { setCheckoutProductList, getCheckoutProductList } from '../../../handler/localstorage';
import { CheckoutContext } from '../../../context/CheckoutPageContext';
import { useDispatch } from 'react-redux';
import { updateItemCount } from '../../../redux/reducers/cartItem/cartItemReducer'
function LeftSide() {

  const dispatch = useDispatch();
  // maybe we need api call to save the item that is added in the cart
  let itemList = getCheckoutProductList();
  let newItem = useLocation().state.addToBasket;
  let { setTotalCost } = useContext(CheckoutContext)

  // check if item already added then calculate total cost of for the items in the cart
  if (newItem && itemList.length) {
    let isPresent = false;
    let calcTotalCost = 0;
    for (let ele of itemList) {
      calcTotalCost += ele.price;
      if (ele.id == newItem.id) {
        isPresent = true;
      }
    }

    // set the value of the total Cost for the right side panel
    setTotalCost(calcTotalCost)

    if (!isPresent) {
      setCheckoutProductList(newItem);
      itemList = [newItem, ...itemList];
    }

    // newItem present by no previous item found
  } else if (newItem && !itemList.length) {
    itemList.push(newItem);
    setCheckoutProductList(newItem);
  }

  dispatch(updateItemCount(itemList.length || 0))
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
