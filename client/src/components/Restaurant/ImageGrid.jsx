import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
    return (
        <>
            <div className="w-full h-60 md:hidden">
                <img
                    src={props.images.length && props.images[0].location}
                    alt="restaurant"
                    className="w-full h-full object-cover object-center rounded-lg"
                />
            </div>
            <div className="hidden w-full h-96 md:flex gap-1">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={props.images.length && props.images[0].location}
                        alt="restaurant"
                        className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110"
                    />
                </div>
                <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                    <div className="w-full h-2/4 overflow-hidden rounded-lg">
                        <img
                            src={props.images.length && props.images[1].location}
                            alt="restaurant"
                            className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110"
                        />
                    </div>
                    <div className="w-full h-2/4 overflow-hidden rounded-lg">
                        <img
                            src={props.images.length && props.images[2].location}
                            alt="restaurant"
                            className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110"
                        />
                    </div>
                </div>
                <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                    <div className="w-full h-2/4 relative">
                        <img
                            src={props.images.length && props.images[3].location}
                            alt="restaurant"
                            className="w-full h-full object-cover object-center rounded-lg"
                        />
                        <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
                        <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full text-center text-white font-semibold">
                            View Gallery
                        </h4>
                    </div>
                    <div className="w-full h-2/4 relative">
                        <img
                            src={props.images.length && props.images[4].location}
                            alt="restaurant"
                            className="w-full h-full object-cover object-center rounded-lg"
                        />
                        <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
                        <div className="absolute flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center text-white font-semibold">
                            <div className="bg-black p-3 rounded-full bg-opacity-50">
                                <AiOutlineCamera className="text-white" />
                            </div>
                            <h4>View Gallery</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageGrid;