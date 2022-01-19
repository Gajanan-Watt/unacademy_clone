import logo from './logo.svg';
import './App.css';
import {Explore} from './components/Explore/Explore'
import {Goal} from './components/Goal/Goal'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
   


    <Routes>
    <Route path='/' element={<Explore />}></Route>
    <Route path='/goal' element={<Goal />}></Route>
   
    </Routes>

  

    </div>
  );
}

export default App;
