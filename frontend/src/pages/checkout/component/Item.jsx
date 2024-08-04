import React from 'react';

function Item() {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex gap-6 items-start">
        {/* Checkbox */}
        <div className="flex-none self-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            id="checkbox1"
          />
        </div>

        {/* Item picture */}
        <div className="flex-none h-32 w-32">
          <div className="h-full w-full bg-blue-500 rounded-md"></div>
        </div>

        {/* Item info */}
        <div className="flex-grow h-full">
          <div className="flex flex-col justify-between h-full space-y-3">
            {/* Title */}
            <div className="text-sm font-medium text-gray-800">
              Minimalist Gentle Face Wash With 6% Oat Extract & Hyaluronic Acid For Sensitive Skin (Dry to Normal) | Sulphate Free | Non-Drying | Fragrance Free | Gentle Cleanser (120 ML)
            </div>
            
            {/* Quantity and Delete */}
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  className="block w-16 bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="text-red-600 hover:text-red-800 text-sm cursor-pointer">Delete</button>
            </div>
          </div>
        </div>

        {/* Price show */}
        <div className="flex-none text-lg font-semibold text-gray-800">
          Rs. 1,999
        </div>
      </div>
    </div>
  );
}

export default Item;
