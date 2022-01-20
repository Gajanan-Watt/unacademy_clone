import React from 'react'
import '../payment/payment.css'

function EmiOfferBar(){
    return (
        <div className="right--emi">
            <span className="rightspan--emi">
              <span>
                <img className="rightplan" src="" alt="" />
              </span>
              <img
                className="percentage--icon"
                src="https://static.uacdn.net/production/_next/static/images/sale_discount.png?q=75&w=32"
                alt=""
              />
            </span>

            <p className="nocostEmi">
              No cost EMI available on 6 months & above subscription plans
            </p>
          </div>
    )
}

export default EmiOfferBar;