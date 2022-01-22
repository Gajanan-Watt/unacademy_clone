import { useSelector } from "react-redux";
import { GoalSec1 } from "./GoalSec1";
import { GoalSec2 } from "./GoalSec2";
import { LiveClasses } from "./LiveClasses";
import { TopEducator } from "./TopEducator";
import { Video } from "./Video";
import { Video2 } from "./Video2";
import { Video3 } from "./Video3";
import { Overlay } from "../Login/Overlay";
import { Navbar1,Navbar2 } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Goal = () => {
  const { goal } = useSelector((state) => ({ goal: state.goal }));
  const {show,phone} =useSelector((state)=>({show:state.show,phone:state.phone}))
  console.log(goal);

  return (
    <div>
      {phone?<Navbar2 /> :<Navbar1 /> }
      {show?<Overlay />:show}
      <GoalSec1 name={goal.name} />
      <GoalSec2 />
      <LiveClasses tutor={goal.tutor} />
      <TopEducator name={goal.name} topTut={goal.topTut} />
      <Video name={goal.name} />
      <Video2 />
      <Video3 />
      <Footer />
    </div>
  );
};
