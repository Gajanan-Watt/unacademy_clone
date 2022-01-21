import './Video.css'

export const Video3=({name})=>{
    return <div className='video11'>
 <div className='mainVideo'>
        <div className="leftVideoDiv">
       <h1 className='videoHeading'>A subscription that's more than just classes</h1> 
        </div>
        <div className="rightVideoDiv">
            <div>
            <video loop muted autoPlay playsInline className="videoLoop"><source data-src="https://static.uacdn.net/web-cms/testseries_17b34f8aec.webm" type="video/webm" src="https://static.uacdn.net/web-cms/testseries_17b34f8aec.webm" /><source data-src="https://static.uacdn.net/web-cms/testseries_f20683d1ca.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/testseries_f20683d1ca.mp4" /></video>

                <h4 className='videoHead4'>Live tests and quizzes</h4>
                <p className='videopara'>Take live mock tests curated in line with the exam pattern to measure your progress, and stay on track</p>

            </div>
      

        <div>
        <video loop muted autoPlay playsInline className="videoLoop"><source data-src="https://static.uacdn.net/web-cms/analytics_96e889f457.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/analytics_96e889f457.mp4" /><source data-src="https://static.uacdn.net/web-cms/analytics_8dd3b1a51e.webm" type="video/webm" src="https://static.uacdn.net/web-cms/analytics_8dd3b1a51e.webm" /></video>

            <h4 className='videoHead4'> Detailed report and analysis</h4>
            <p className='videopara'>Get in-depth insights with topic wise scores, time spent per question and competitive stats</p>
        </div>

       
       <div>
       <video loop muted autoPlay playsInline className="videoLoop"><source data-src="https://static.uacdn.net/web-cms/pdf_650d0a3977.webm" type="video/webm" src="https://static.uacdn.net/web-cms/pdf_650d0a3977.webm" /><source data-src="https://static.uacdn.net/web-cms/pdf_8d42e74317.mp4" type="video/mp4" src="https://static.uacdn.net/web-cms/pdf_8d42e74317.mp4" /></video>

        <h4 className='videoHead4'>PDFs and learning material</h4>
        <p className='videopara'>Get access to class notes with educator annotations for you to revisit and revise anytime

Bank Exams Subscription</p>
       </div>
          
        </div>
    </div>
    </div>
    
   
}