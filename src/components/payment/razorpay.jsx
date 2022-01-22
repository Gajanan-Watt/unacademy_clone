import React from "react";

import { useSelector } from "react-redux";
import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

export default function PayClick() {
  const { goal } = useSelector((state) => ({ goal: state.goal }));
  console.log(goal);
  let price_new = goal.price - Math.floor((goal.price * 10) / 100);
  console.log(price_new);

  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    const order = {
      amount: 1000,
      currency: "INR",
      receipt: "rcptid_11",
    };

    const options = {
      key: "rzp_test_47FIUGEzxugCSn",
      amount: price_new * 100 * 12,
      currency: "INR",
      name: "Unacademy",
      description: "Test Transaction",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Unacademy_Logo.png/160px-Unacademy_Logo.png",
      order_id: order.id,
      handler: (res) => {
        console.log(res);

        if (
          typeof res.razorpay_payment_id == "undefined" ||
          res.razorpay_payment_id < 1
        ) {
          window.location.href = "https://unacademy-clone.vercel.app/live";
        } else {
          window.location.href = "https://unacademy-clone.vercel.app/live";
        }
      },
      prefill: {
        name: "Unacademy",
        email: "rahul_fw12_033@masai.school",
        contact: "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#d4c4b9",
      },
    };

    alert("Your Plan will be activated with in minute");

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Proceed To Pay</button>
    </div>
  );
}
