import './ExploreTop.css'

export const ExploreTop=({sendFlag})=>{
let flag=0



const handleBtn1=()=>{
flag=0
sendFlag(flag)

}

const handleBtn2=()=>{
    flag=1
    sendFlag(flag)
    
   
}

    return <div id='outer'>
<div id="exploreTop">
        <h1>Choose your goal</h1>
        <div className='inputDiv'>
            <img className='searchIcon' src="https://static.uacdn.net/production/_next/static/images/search.svg?q=75&w=1920" alt="" />
            <input type="search" placeholder='Search' />
        </div>
        <div>
            <button className='btn1' onClick={handleBtn1}>Competitive Exam</button>
            <button className='btn1' onClick={handleBtn2}>Class 6 to 12</button>
        </div>
    </div>
    </div>
    
    
}
