import React from 'react';
import LeftSide from './component/LeftSide';
import Rightside from './component/Rightside';
import { CheckoutPageContext } from '../../context/CheckoutPageContext';

function CheckoutPage() {
    return (
        <div>
            <CheckoutPageContext>
                <div className="flex justify-center">
                    <div className="w-checkoutMain mt-16 flex gap-12">
                        <div className='w-[75%]'>
                            <LeftSide />
                        </div>
                        <div className='w-[25%]'>
                            <Rightside />
                        </div>
                    </div>
                </div >
            </CheckoutPageContext>
        </div>
    )
}

export default CheckoutPage
