import React from "react";
import { TiTick } from 'react-icons/ti';
import "./price.css";

function Price(props) {
  console.log(props);

  const [selectOption, setSelectOption] = React.useState(props.opt);

  const toggle = () => {
    // console.log(selectOption);
    setSelectOption((prevValue) => !prevValue);
  };

  const styles = {
    border: selectOption ? "2px solid green" : "",
  };

  return (
    <>
      <div style={styles} className="outer--box--price">
        <div className="outer--price--box">
          <div onClick={toggle} style={styles} className="option--select">
            
            {selectOption ? <TiTick /> : ""}
          </div>

          <div className="outer--price--months">
            <h4 className="months--details">{props.months} months</h4>
            <p className="save--off">SAVE {props.discount}%</p>
          </div>
          <div className="main--price">
            <h4 className="price--heading">
              ₹{props.price}
              <span className="price--mon"> /mo</span>
            </h4>
            <div className="final--price--box">
              <div className="total--box">
                <p className="total--heading">Total</p>
                <div className="final--price">
                  <span className="total--display--price">
                    ₹{props.price * props.months}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
