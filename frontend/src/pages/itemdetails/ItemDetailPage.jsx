import React, { useEffect, useState } from 'react';
import { getProductById } from '../../rest-api/getProductById';
import { useLocation, NavLink } from 'react-router-dom';

function ItemDetailPage() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('product');
  const [data, setData] = useState({});

  useEffect(() => {

    // console.log(productId, "product idididid")
    getProductById(productId)
      .then((data) => {
        console.log(data)
        setData(data);
      });


  }, [])
  return (
    <div className="w-checkoutMain mx-auto py-10 px-4">
      <div className="flex gap-20">
        {/* Product Image */}
        <div className="w-[40%]">
          <div className="rounded-lg  shadow-md p-4">
            <img
              src={data.image}
              alt="Product"
              className="h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='w-[60%]'>
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            {data.title}
          </h1>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500">
              {/* Star icons for rating */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10 .122 6.91 5.5 5 10 0l4.5 5 5.378 1.91L14.5 10l1.378 8.09z" />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10 .122 6.91 5.5 5 10 0l4.5 5 5.378 1.91L14.5 10l1.378 8.09z" />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10 .122 6.91 5.5 5 10 0l4.5 5 5.378 1.91L14.5 10l1.378 8.09z" />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10 .122 6.91 5.5 5 10 0l4.5 5 5.378 1.91L14.5 10l1.378 8.09z" />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10 .122 6.91 5.5 5 10 0l4.5 5 5.378 1.91L14.5 10l1.378 8.09z" />
              </svg>
            </div>
            <span className="ml-2 text-gray-600">4.8 out of 5 stars</span>
            <span className="ml-2 text-blue-600 cursor-pointer">120 reviews</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-800 mb-4">
            Rs. {data.price}
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-6">
            {data.description}
          </p>

          {/* Purchase Options */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <label htmlFor="quantity" className="text-gray-700 mr-3">
                Quantity:
              </label>
              <select
                id="quantity"
                className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
              <NavLink
                to='/checkout'
                state={{ addToBasket: data }}
              >
                Add to Cart
              </NavLink>
            </button>
            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
