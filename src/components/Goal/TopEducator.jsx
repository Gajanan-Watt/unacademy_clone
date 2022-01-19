import "./TopEducator.css"

export const TopEducator = ({ name, topTut }) => {
    return <div>
        <h1>Prepare with Top Educators</h1>
        <p>Access to India's best {name} educators is just a subscription away</p>
        <div>
            {
                topTut.map((el) => (
                    <div className="sidebarflex">
                        <div>
                            <img id="sideimg" src={el.img} alt="" />
                        </div>
                        <div>
                            <div>
                                <h3>{el.name}</h3>
                                <p>{el.desc}</p>
                                <p>{el.teach}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
}