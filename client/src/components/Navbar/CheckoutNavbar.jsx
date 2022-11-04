import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CheckoutNavbar = () => {
    const [user] = useState({
        fullName: "Vishnuraj M",
    });

    const navigate = useNavigate();

    return (
        <>
            <nav className="p-4 flex bg-white shadow-md w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <AiOutlineArrowLeft
                            className="cursor-pointer"
                            onClick={() => navigate(-1)}
                        />
                        <div className="w-28">
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="border border-gray-300 text-zomato-400 w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png"
                                    alt=""
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            {user.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default CheckoutNavbar;