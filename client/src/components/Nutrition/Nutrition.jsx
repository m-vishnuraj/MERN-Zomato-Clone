import React from "react";

// components
import NutritionCard from "./NutritionCard";
import NutritionCarousel from "./NutritionCarousel";
import NutritionHeroCarousel from "./NutritionHeroCarousel";

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className="my-6">
                <NutritionCarousel />
            </div>
            <div className="flex justify-start flex-wrap">
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/protein-jar-mockup_134542-389.jpg?w=826&t=st=1665414269~exp=1665414869~hmac=3405a5db5b8bdcd599ef7aa86895479b6cf4fffcd9dcec94f8992ac8dd2477cd"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/protein-powder-container-mockup_47987-2908.jpg?w=900&t=st=1665413495~exp=1665414095~hmac=9da82653e0e4ded724d332cb74558c9d3776b7299324c73e68a66cb5451332fb"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/hand-holding-fitness-spoon-filled-with-protein-container_23-2148657547.jpg?w=996&t=st=1665413476~exp=1665414076~hmac=2475bcab0996ec7b85baf11c41d75bab56761614ad98382bcea4eb0a80499bf0"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/premium-psd/protein-powder-supplement-packaging-with-dumbbell-mockup_7956-717.jpg?w=996"
                />
                <NutritionCard
                    bg="blue"
                    image="https://img.freepik.com/free-psd/collection-fitness-protein-powder-bags_23-2148657586.jpg?w=996&t=st=1665416816~exp=1665417416~hmac=9e6116551070010a0354905ae6400ab171c1bd0d6e01156f8319783330fa6049"
                />
            </div>
        </div>
    );
};

export default Nutrition;