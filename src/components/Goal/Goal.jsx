import { useSelector } from "react-redux"
import { GoalSec1 } from "./GoalSec1";
import { GoalSec2 } from "./GoalSec2";
import { LiveClasses } from "./LiveClasses";
import { TopEducator } from "./TopEducator";


export const Goal=()=>{

    const {goal}=useSelector((state)=>({goal:state.goal}))
    
    console.log(goal);
    
    return <div>
        <GoalSec1 name={goal.name}/>
        <GoalSec2 />
        <LiveClasses tutor={goal.tutor} />
        <TopEducator name={goal.name} topTut={goal.topTut} />
    </div>
}