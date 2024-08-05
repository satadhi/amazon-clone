import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroCard({ data }) {

    // let heroCardData = {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }

    return (
        <div className="p-1 h-full">
            <div className="h-full shadow-lg p-4 rounded-lg bg-white">
                <div className="h-full flex flex-col justify-stretch items-center gap-2">
                    <div>
                        <h1 className="text-xl font-bold">{data.title}</h1>
                    </div>
                    <div>
                        <img className="h-52 w-auto object-contain" src={data.image} alt="" />
                    </div>
                    <div className="mt-2">
                        <span className="font-bold">Rating:</span> {data.rating.rate} ({data.rating.count})
                    </div>
                    <div>
                        <button className='text-sm bg-icons-main text-white py-1 px-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:bg-orange-600'>
                            <NavLink
                                to='/checkout'
                                state={{ addToBasket: data }}
                            >
                                Add to Basket
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroCard
