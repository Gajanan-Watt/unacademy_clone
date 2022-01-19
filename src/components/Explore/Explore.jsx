import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getdataError, getdataLoading, getdataSuccess, goalData } from "../../store/action"
import { ExploreTop } from "./ExploreTop"
import "./Explore.css"

export const Explore = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const { data } = useSelector((state) => ({ data: state.data }))

    


    useEffect(() => {

        dispatch(getdataLoading())
        fetch('http://localhost:3001/one')
            .then(res => res.json())
            .then(d => dispatch(getdataSuccess(d)))
            .catch(err => dispatch(getdataError(err)))
    }, [])




    const handleClick = (payload) => {
        dispatch(goalData(payload))
        navigate('/goal')
    }

    const [flag,setFlag]=useState(0)
    const sendFlag=(flag)=>{
        
setFlag(flag)
    }

   
    return <div>
        <ExploreTop sendFlag={sendFlag} />
        {flag==0 ? <div className="mainDiv">
        <div className="leftheadings">
                <a href="#cbse"><p>CBSE</p></a>
                <a href="#mh"><p>Maharashtra State Board</p></a>
                <a href="#up"><p>Up State Board</p></a>
                <p>JEE and NEET Preparation</p>
                <p>IITJEE/NEET Foundation & NTSE</p>
            </div>
            <div className="scrolldiv">

            <div className="titleDiv"><p id="cbse">CBSE</p></div>
                <div className="dataDiv">
                    {
                        data.CBSE.map((el) => (
                            <div className="innerdiv" onClick={() => handleClick(el)}>
                                <img src={el.img} alt="" />
                                <p>{el.name}</p>
                            </div>

                        ))
                    }
                </div>
                <div className="titleDiv"><p id="mh">Maharashtra State Board</p></div>
                <div className="dataDiv">
                    {
                        data.MSB.map((el) => (
                            <div className="innerdiv" onClick={() => handleClick(el)}>
                                <img src={el.img} alt="" />
                                <p>{el.name}</p>
                            </div>

                        ))
                    }
                </div>
                <div className="titleDiv"><p id="up">UP State Board</p></div>
                <div className="dataDiv">
                    {
                        data.USB.map((el) => (
                            <div className="innerdiv" onClick={() => handleClick(el)}>
                                <img src={el.img} alt="" />
                                <p>{el.name}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>:"hello" }
       
    </div>

}