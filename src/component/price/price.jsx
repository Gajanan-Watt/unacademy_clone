import React from "react";

import "./price.css"


function Price() {
  return (
    <>
      <div className="outer--box--price">
        <div className="outer--price--box">
        <div className="option--select"></div>
          <div className="outer--price--months">
            <h4
              className="months--details"
            >
              24 months
            </h4>
            <p
             
              className="save--off"
            >
              SAVE 60%
            </p>
          </div>
          <div className="main--price">
            <h4
              
              className="price--heading"
            >
              ₹1,967<span className="price--mon"> /mo</span>
            </h4>
            <div className="final--price--box">
              <div className="total--box">
                <p
                  
                  className="total--heading"
                >
                  Total
                </p>
                <div className="final--price">
                  <span className ="total--display--price">₹47,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price