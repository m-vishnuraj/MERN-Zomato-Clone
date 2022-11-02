
import React from "react";

import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
    return (
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Nightlife Restaurant in Delhi NCR
            </h1>
            <NightLifeCarousel />
        </div>
    );
};

export default NightLife;