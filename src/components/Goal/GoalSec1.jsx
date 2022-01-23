import { useNavigate } from 'react-router-dom'
import './Goal.css'


export const GoalSec1=({name})=>{

  const navigate=useNavigate()


  const handleSub=()=>{
    navigate('/payment')
  }

    return <div id='outer'>

    <div id='sec1'>
  
        <div id='check'>
        <h1>Prepare for {name}</h1>
        <p className='slog'>Learn with the best classroom experience on India’s largest learning platform</p>

       <button onClick={handleSub} className='subBtn'>Get subscription</button>
        <div className='offierdiv'>
       <img src="https://static.uacdn.net/production/_next/static/images/discount-green.svg?q=75&w=32" alt="" />
       <p>View subscription offers</p>
       </div>
       <p>Get upto 3 months free with your subscription</p>
        </div>
      
    </div>

    </div>
}
