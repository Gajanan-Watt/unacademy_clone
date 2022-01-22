import "./Navbar.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSide } from "../../store/action";


export const Navbar1 = () => {

  
const {show} =useSelector((state)=>({show:state.show}))
const dispatch = useDispatch()

const handleLogin=()=>{
  dispatch(showSide(!show))
  console.log(show);
  // setShow(!show)
}
  return (
    <div className="navbar">
      <img
        style={{ cursor: "pointer" }}
        src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
        alt="logo"
      />

      <button onClick={handleLogin} className="button">Login</button>
    </div>
  );
};

export const Navbar2 = () => {
  return (
    <div className="navbar">
      <img
        style={{ cursor: "pointer" }}
        src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
        alt="logo"
      />

      <img
        className="user_pic"
        src="https://bnpull-1195f.kxcdn.com/pub/media/magefan_blog/default-user3.png"
      />
    </div>
  );
};
