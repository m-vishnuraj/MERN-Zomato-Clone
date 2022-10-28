import React from 'react'
import FoodTab from '../components/FoodTab/FoodTab'
import Navbar from '../components/Navbar/Navbar'

const HomePageLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <Navbar />
                    <FoodTab />
                    <Component {...props} />
                </>
            )
        }

export default HomePageLayout