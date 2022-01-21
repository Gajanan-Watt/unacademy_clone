import './Video.css'

export const Video=({name})=>{
    return <div className='video11'>
 <div className='mainVideo'>
        <div className="leftVideoDiv">
       <h1 className='videoHeading'>The best way to prepare for {name}</h1> 
        </div>
        <div className="rightVideoDiv">
            <div>
                <video loop muted autoPlay playsInline className="videoLoop">
                <source data-src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm" type="video/webm" src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm" />
                 <source data-src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4" />
                </video>

                <h4 className='videoHead4'>Schedule that works for you</h4>
                <p className='videopara'>Enroll in unlimited courses, get a personalised schedule and never miss a live class with our timely reminders</p>

            </div>
      

        <div>
        <video loop autoPlay playsInline className="videoLoop">
            <source data-src="https://static.uacdn.net/web-cms/language_d56e370f78.webm" type="video/webm" src="https://static.uacdn.net/web-cms/language_d56e370f78.webm" />
            <source data-src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4" />
            </video>

            <h4 className='videoHead4'> No Language barrier</h4>
            <p className='videopara'>Our educators teach in English, Hindi, Malayalam, Tamil and 12 other languages, so language is never a barrier</p>
        </div>

       
       <div>
       <video loop autoPlay playsInline className="videoLoop">
                <source data-src="https://static.uacdn.net/web-cms/practice_2202d81863.webm" type="video/webm" src="https://static.uacdn.net/web-cms/practice_2202d81863.webm" />
                <source data-src="https://static.uacdn.net/web-cms/practice_1f2b489fe1.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/practice_1f2b489fe1.mp4" />
                </video>

        <h4 className='videoHead4'>Learn anytime, anywhere</h4>
        <p className='videopara'>Watch our recorded classes, online or offline from the comfort of your mobile, PC or tablet</p>
       </div>
          
        </div>
    </div>
    </div>
    
   
}