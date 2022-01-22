import React from "react";
import "./payment.css";
import Price from "../price/price.jsx";
import ImageShow from "../payment-images/payment-image.jsx";
import PaymentNavbar from "../payment-images/payment-navbar.jsx";
import EmiOfferBar from "../iconic-plus/emi.jsx";
import PlusIconicToggle from "../iconic-plus/iconic-plus.jsx";
import { useSelector } from "react-redux";
import PayClick from "./razorpay"

function Payment() {
 

  const { goal } = useSelector((state) => ({ goal: state.goal }));
  console.log(goal);

  

  return (
    <>
      <PaymentNavbar />
      <ImageShow />
      <div className="main--left--container">
        <PlusIconicToggle />
        <div className="right--bottom">
          <EmiOfferBar />
          <Price
            price={goal.price - Math.floor((goal.price * 33) / 100)}
            months={24}
            discount={33}
          />
          <Price
            price={goal.price - Math.floor((goal.price * 21) / 100)}
            months={18}
            discount={21}
          />
          <Price
            price={goal.price - Math.floor((goal.price * 10) / 100)}
            months={12}
            discount={10}
          />
          <PayClick />
        </div>
      </div>
    </>
  );
}

export default Payment;
