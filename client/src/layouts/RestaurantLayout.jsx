import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const RestaurantLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <Navbar />
                    <Component {...props} />
                </>
            )
        }

export default RestaurantLayout