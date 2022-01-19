import './LiveClasses.css'


export const LiveClasses = ({ tutor }) => {
    return <div id="liveclass">
        <div className='rightmainDiv'>
            <span id='free'>FREE</span>
            <h1>Live Classes</h1>
            <p>Experience Plus for free and start learning from the best</p>
            <h4 id='see'>See all</h4>
        </div>

        <div className='secondDiv'>
            {
                tutor.map((el) => (
                    <div className='sidediv'>
                        <div >
                            <img className="liveimg" src={el.img} alt="" />
                        </div>
                        <div className='liveheaddiv'>
                            <h6>{el.title}</h6>
                            <p>{el.end}</p>
                            <p>{el.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}