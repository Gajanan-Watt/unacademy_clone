import logo from "./logo.svg";
import "./App.css";
import { Explore } from "./components/Explore/Explore";
import { Goal } from "./components/Goal/Goal";
import { Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/Home";
import Payment from "./components/payment/payment";
import { Tutor } from "./components/tutor_page/Tutor";
import LiveClass from "./components/Live/LiveClass";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/goal" element={<Goal />}></Route>
        <Route path="/goal/tutor/:name" element={<Tutor />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/live" element={<LiveClass />}></Route>

      </Routes>
    </div>
  );
}

export default App;
