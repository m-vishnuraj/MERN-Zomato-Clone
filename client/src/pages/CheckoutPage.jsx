import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";


import CheckoutLayout from '../layouts/CheckoutLayout'

// components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
      name: "Butter Pancakes with Bacon",
      rating: 4.5,
      price: 200,
      description: "Rashers and bourbon caramel sauce.",
      quantity: 3,
      totalPrice: 600,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
      name: "Amritsari Fish Tikka",
      rating: 5,
      price: 250,
      quantity: 1,
      totalPrice: 250,
      description:
        "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    },
  ]);

  const address = [
    {
      name: "Home",
      address: "Palama Street, 123 Main",
    },
    {
      name: "Work",
      address: "123 Main Street, CP",
    },
  ];

  const payNow = () => {
    let options = {
      key: "rzp_test_sFu4quN3ak6vxG",
      amount:
        cart.reduce((total, current) => total + current.totalPrice, 0) * 100,
      currency: "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
      prefill: {
        name: "Vishnu",
        email: "text@email.com",
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 drop-shadow-2xl bg-white flex flex-col items-center p-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>GT World Mall, Magadi Road, NCR Noida</small>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            {cart.map((item) => (
              <FoodItem key={item._id} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button
          onClick={payNow}
          className=" flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white fomt-medium text-lg bg-zomato-400 rounded-lg"
        >
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
  );
};

export default CheckoutLayout(Checkout);