import React from 'react'
import { useParams } from "react-router-dom";
// Layout
import HomePageLayout from '../layouts/HomePageLayout'
// Components
import Delivery from '../components/Delivery/Delivery';
import Dining from '../components/Dining/Dining';
import NightLife from '../components/NightLife/NightLife';
import Nutrition from '../components/Nutrition/Nutrition';

const HomePage = () => {
  const { type } = useParams();
  return (
    <>
      <div className="my-5 mb-20 md:mb-10">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutrition" && <Nutrition />}
      </div>
    </>
  )
}

export default HomePageLayout(HomePage)