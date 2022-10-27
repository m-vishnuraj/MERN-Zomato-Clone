import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePageLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <Navbar />
                    <Component {...props} />
                </>
            )
        }

export default HomePageLayout