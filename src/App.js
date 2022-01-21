import logo from './logo.svg';
import './App.css';
import {Explore} from './components/Explore/Explore'
import {Goal} from './components/Goal/Goal'
import {Routes,Route} from 'react-router-dom'
import Home from './components/landing_page/Home'
import Payment from "./components/payment/payment"


function App() {
  return (
    <div className="App">
   


    <Routes>
    <Route path='/' element={<Explore />}></Route>
    <Route path='/goal' element={<Goal />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/payment' element={<Payment />}></Route>

   
    </Routes>

  

    </div>
  );
}

export default App;
