import React, { useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutPageContext'

function Rightside() {

  let { totalCost } = useContext(CheckoutContext)

  return (
    <div>
       <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-medium">Subtotal (4 items):</span>
        <span className="text-lg font-semibold text-gray-800">Rs. {totalCost}</span>
      </div>

      {/* Gift Notice */}
      <div className="mb-4">
        <input
          type="checkbox"
          id="gift"
          className="form-checkbox h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"
        />
        <label htmlFor="gift" className="ml-2 text-sm text-gray-700">
          This order contains a gift
        </label>
      </div>

      {/* Proceed to Buy Button */}
      <button
        type="button"
        className="w-full py-2 px-4 bg-icons-main text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        Proceed to Buy
      </button>
    </div>
    </div>
  )
}

export default Rightside
