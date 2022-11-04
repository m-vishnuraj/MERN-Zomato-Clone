import React from "react";
import { BsTrashFill } from "react-icons/bs";

const FoodItem = (props) => {
    const deleteFoodFromCart = () => { };

    const increment = () => { };

    const decrement = () => { };

    return (
        <>
            <div className="flex items-center justify-between">
                <h5>{props.name}</h5>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex flex-col items-end">
                        <small>₹ {parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
                            <button
                                onClick={decrement}
                                className="p-1 bg-zomato-400 text-white rounded"
                            >
                                -
                            </button>
                            <small>{props.quantity}</small>
                            <button
                                onClick={increment}
                                className="p-1 bg-zomato-400 text-white rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <BsTrashFill
                        onClick={deleteFoodFromCart}
                        className="text-zomato-400 text-lg md:text-xl cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
};

export default FoodItem;