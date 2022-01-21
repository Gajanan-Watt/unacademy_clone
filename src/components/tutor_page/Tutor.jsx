import "./tutor.css";
import { useSelector } from "react-redux";

export const Tutor = () => {
  const { tutor } = useSelector((state) => ({ tutor: state.tutor }));
  console.log(tutor);
  //in this variable you can see that tutor detail m commit kr rha hu aap use pull kro then check krte h
  // 1 min bss
  //okk
  return (
    <div className="tutor_sec">
      <div className="tutor_header">
        <div className="tutor_img">
          <img src={tutor.img} />
        </div>
        <div className="tutor_info">tutor information</div>
        <button className="tutor_btn">follow btn</button>
      </div>
      <div className="tutor_content">
        <div className="tutor_leftsec">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tutor_rightsec">
          detailed information on tutors qualificaton
        </div>
      </div>
    </div>
  );
};
