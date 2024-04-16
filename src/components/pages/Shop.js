import React from 'react'
import Hero from './Hero'
import NewArrivals from '../Shop/NewArrivals'
import BigSavingZone from '../Shop/BigSavingZone'
import MenCategories from '../Shop/MenCategories'
import WomenCategories from '../Shop/WomenCategories'
import Brand from '../Shop/Brand'
import LimeLight from '../Shop/LimeLight'


const Shop = () => {
    return (
        <>
            <main className="w-full h-full">
                <Hero />
                <NewArrivals />
                <BigSavingZone/>
                <MenCategories/>
                <WomenCategories/>
                <Brand/>
                <LimeLight/>
            </main>
        </>
    )
}

export default Shop