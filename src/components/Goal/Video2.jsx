import './Video.css'

export const Video2=()=>{
    return <div className='video11'>
 <div className='mainVideo'>
        <div className="leftVideoDiv">
       <h1 className='videoHeading'>Feels like you are in the classroom</h1> 
        </div>
        <div className="rightVideoDiv">
            <div>
            <video loop muted autoPlay playsInline className="videoLoop">
                <source data-src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm" type="video/webm" src="https://static.uacdn.net/web-cms/chatting_f25584317b.webm" />
                <source data-src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/chatting_b0fd3b34ea.mp4" />
                </video>

                <h4 className='videoHead4'>Interact with your educator</h4>
                <p className='videopara'>Chat with the educator, engage in discussions and ask your questions - all while the class is going on</p>

            </div>
      

        <div>
        <video loop muted autoPlay playsInline className="videoLoop"><source data-src="https://static.uacdn.net/web-cms/polls_362dafb5eb.webm" type="video/webm" src="https://static.uacdn.net/web-cms/polls_362dafb5eb.webm" /><source data-src="https://static.uacdn.net/web-cms/polls_9dd8a3c6e0.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/polls_9dd8a3c6e0.mp4" /></video>
            <h4 className='videoHead4'> Answer live polls</h4>
            <p className='videopara'>Participate in live polls by the educator in class and compete for a place in the leaderboard</p>
        </div>

       
       <div>
       <video loop autoPlay playsInline className="videoLoop">
       <source data-src="https://static.uacdn.net/web-cms/question_9baa1f946f.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/question_9baa1f946f.mp4" /></video>

        <h4 className='videoHead4'>Get your doubts cleared</h4>
        <p className='videopara'>Ask your doubts and get them answered immediately by the educator during classes</p>
       </div>
          
        </div>
    </div>
    </div>
    
   
}