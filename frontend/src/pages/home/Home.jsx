import React, { useEffect, useState } from 'react'
import bgImages from './bgImages';
import HeroCard from '../../components/ItemHeroCard/HeroCard';
import DynamicGrid from './DynamicGrid';
import { getProductList } from '../../rest-api/getProductList';


function Home() {

    const [bgImageNo, setBgImageNo] = useState(0);
    const [productData, setProductData] = useState([]);

    // Fake API call to bg images
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(bgImageNo)
            setBgImageNo((prev) => (prev + 1) % bgImages.length)
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [bgImageNo]);


    // get the Home products
    useEffect(() => {
        getProductList()
            .then((res) => {
                console.log(res)
                let hashMap = {};
                for (let ele of res) {
                    if (!hashMap.hasOwnProperty(ele.category)) {
                        hashMap[ele.category] = [];
                    }
                    hashMap[ele.category].push(ele)

                }
                setProductData(Object.values(hashMap));
            });
    }, []);

    return (
        <div className="flex justify-center">
            <div className="max-w-homebody">

                {/* backgroundImage */}
                <div className='z--1 mb-[-150px]'>
                    <img className='bg-[linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0))'
                        src={bgImages[bgImageNo]} />
                </div>

                {/* the item grid */}
                {/* <div>
                    <HeroCard data= {heroCardData}/>
                </div> */}
                <DynamicGrid listOfListOfItems={productData}/>
            </div>
        </div >


    )
}

export default Home
