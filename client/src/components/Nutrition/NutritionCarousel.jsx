import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import NutritionCarouselCard from "./NutritionCarouselCard";

const NutritionCarousel = () => {
    const [categories, setCategories] = useState([
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title: "Protien & Fitness",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Sleep & stress",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & Weight Loss",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            title: "Omegas & CoQ10",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
            title: "Beauty & Skin Care",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
            title: "Immunity & Bones",
        },
    ]);

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    return (
        <>
            <div className="lg:hidden grid grid-cols-2 gap-2">
                {categories.map((each, index) => (
                    <NutritionCarouselCard key={index} {...each} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((each, index) => (
                        <SwiperSlide key={index}>
                            <NutritionCarouselCard {...each} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default NutritionCarousel;