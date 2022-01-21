import React from "react";
import "./payment.css";
import Price from "../price/price.jsx";
import ImageShow from "../payment-images/payment-image.jsx";
import PaymentNavbar from "../payment-images/payment-navbar.jsx";
import EmiOfferBar from "../iconic-plus/emi.jsx";
import PlusIconicToggle from "../iconic-plus/iconic-plus.jsx";
import { useSelector } from "react-redux";


function Payment() {

const {goal} = useSelector((state)=>({goal:state.goal}))
console.log(goal)

  return (
    <>
      <PaymentNavbar />
      <ImageShow />
      <div className="main--left--container">
        <PlusIconicToggle />
        <div className="right--bottom">
          <EmiOfferBar />
          <Price />
        </div>
      </div>
    </>
  );
}

export default Payment;
