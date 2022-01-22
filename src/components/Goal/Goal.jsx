import { useSelector } from "react-redux";
import { GoalSec1 } from "./GoalSec1";
import { GoalSec2 } from "./GoalSec2";
import { LiveClasses } from "./LiveClasses";
import { TopEducator } from "./TopEducator";
import { Video } from "./Video";
import { Video2 } from "./Video2";
import { Video3 } from "./Video3";
import { Navbar2 } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Goal = () => {
  const { goal } = useSelector((state) => ({ goal: state.goal }));

  console.log(goal);

  return (
    <div>
      <Navbar2 />
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
