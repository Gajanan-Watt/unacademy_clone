import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Overlay } from "../Login/Overlay";
import {
  getdataError,
  getdataLoading,
  getdataSuccess,
  getdata2Error,
  getdata2Loading,
  getdata2Success,
  goalData,
} from "../../store/action";
import { ExploreTop } from "./ExploreTop";
import "./Explore.css";
import { Navbar1,Navbar2 } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Explore = () => {
  const dispatch = useDispatch();

  const {show} =useSelector((state)=>({show:state.show}))

  const navigate = useNavigate();

  const {phone}=useSelector((state)=>({phone:state.phone}))

  const { data, data2 } = useSelector((state) => ({
    data: state.data,
    data2: state.data2,
  }));

  useEffect(() => {
    dispatch(getdataLoading());
    fetch("https://unacademyclone.herokuapp.com/one")
      .then((res) => res.json())
      .then((d) => dispatch(getdataSuccess(d)))
      .catch((err) => dispatch(getdataError(err)));
  }, []);

  useEffect(() => {
    dispatch(getdata2Loading());
    fetch("https://unacademyclone.herokuapp.com/second")
      .then((res) => res.json())
      .then((d) => dispatch(getdata2Success(d)))
      .catch((err) => dispatch(getdata2Error(err)));
  }, []);

  const handleClick = (payload) => {
    dispatch(goalData(payload));
    navigate("/goal");
  };

  const [flag, setFlag] = useState(0);
  const sendFlag = (flag) => {
    setFlag(flag);
  };

  return (
    <div>
      {phone?<Navbar2 /> :<Navbar1 /> }
      {show?<Overlay />:show}
      <ExploreTop sendFlag={sendFlag} />
      {flag == 1 ? (
        <div className="mainDiv">
          <div className="leftheadings">
            <a href="#cbse">
              <p>CBSE</p>
            </a>
            <a href="#mh">
              <p>Maharashtra State Board</p>
            </a>
            <a href="#up">
              <p>Up State Board</p>
            </a>
            <a href="#jee">
              <p>JEE and NEET Preparation</p>
            </a>
            <a href="#iit">
              {" "}
              <p>IITJEE/NEET Foundation & NTSE</p>
            </a>
          </div>
          <div className="scrolldiv">
            <div className="titleDiv">
              <p id="cbse">CBSE</p>
            </div>
            <div className="dataDiv">
              {data.CBSE.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
            <div className="titleDiv">
              <p id="mh">Maharashtra State Board</p>
            </div>
            <div className="dataDiv">
              {data.MSB.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
            <div className="titleDiv">
              <p id="up">UP State Board</p>
            </div>
            <div className="dataDiv">
              {data.USB.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>

            <div className="titleDiv">
              <p id="jee">JEE and NEET Preparation</p>
            </div>
            <div className="dataDiv">
              {data.JEE.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>

            <div className="titleDiv">
              <p id="iit">IITJEE/NEET Foundation & NTSE</p>
            </div>
            <div className="dataDiv">
              {data.IIT.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mainDiv">
          <div className="leftheadings">
            <a href="#upsc">
              <p>UPSC CSE</p>
            </a>
            <a href="#govt">
              <p>Govt Exams</p>
            </a>
            <a href="#defence">
              <p>Defence Exams</p>
            </a>
            <a href="#cat">
              <p>CAT & Other MBA Entrance Tests</p>
            </a>
            <p>State PSC</p>
          </div>
          <div className="scrolldiv">
            <div className="titleDiv">
              <p id="upsc">UPSC CSE</p>
            </div>
            <div className="dataDiv">
              {data2.UPSC_CSE.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
            <div className="titleDiv">
              <p id="govt">Govt Exams</p>
            </div>
            <div className="dataDiv">
              {data2.Govt_Exams.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
            <div className="titleDiv">
              <p id="defence">Defence Exams</p>
            </div>
            <div className="dataDiv">
              {data2.Defence_Exams.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>

            <div className="titleDiv">
              <p id="cat">CAT & Other MBA Entrance Tests</p>
            </div>
            <div className="dataDiv">
              {data2.CAT.map((el) => (
                <div className="innerdiv" onClick={() => handleClick(el)}>
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
