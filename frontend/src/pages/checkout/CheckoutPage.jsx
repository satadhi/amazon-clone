import React from 'react';
import LeftSide from './component/LeftSide';
import Rightside from './component/Rightside';
import { useLocation } from 'react-router-dom';

function CheckoutPage() {
    // let location = useLocation().state || {};
    // console.log("location location", location)
    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-homebody mt-16 flex gap-12">
                    <div className='w-[75%]'>
                        <LeftSide />
                    </div>
                    <div className='w-[25%]'>
                        <Rightside />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default CheckoutPage
