import React from 'react'

function Searchbar() {
  return (
    <div>
      <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
        {/* <!-- Input Field --> */}
        <input type="text" placeholder="Search Amazon.in" class="flex-grow px-4 py-2 text-sm text-gray-700 outline-none" />

        {/* <!-- Search Button --> */}
        <button className="bg-icons-main hover:bg-yellow-600 text-white px-4 py-2 text-sm rounded-r-md focus:outline-none">
          {/* <!-- Search Icon --> */}
          <div className="px-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </div>

        </button>
      </div>

    </div>
  )
}

export default Searchbar
