import "./tutor.css";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";

import { Overlay } from "../Login/Overlay";
import { Navbar1,Navbar2 } from "../Navbar/Navbar";

export const Tutor = () => {
  const { tutor } = useSelector((state) => ({ tutor: state.tutor }));
  
  const {show,phone} =useSelector((state)=>({show:state.show,phone:state.phone}))
  console.log(tutor);

  return (
   

    <div className="tutor_sec">
    {phone?<Navbar2 /> :<Navbar1 /> }
    {show?<Overlay />:show}

      <div className="tutor_header">
        <div className="tutor_img">
          <img src={tutor.img} />
        </div>
        <div className="tutor_info">
          <h2>{tutor.name}</h2>
          <p className="tutor_title">
            <span style={{ color: "rgb(251, 172, 45)" }}>Legend</span> in Bank
            Exams
          </p>
          <p>
            Faculty- English I 8 year exp. I Author l Cleared SSC CGL/SBI
            PO/CAT/MAT/AMCAT- 100 percentile scorer I Gold Medalist I Top
            educator
          </p>
        </div>
        <button className="tutor_btn">Follow</button>
      </div>
      <div style={{ width: "100%", height: "30px" }}>
        445M Watch mins 55M Watch mins (last 30 days) 240K Followers 9K
        Dedications
      </div>
      <div className="tutor_content">
        <div className="tutor_leftsec">
          <h2 style={{ textAlign: "left", paddingLeft: "30px" }}>Bank Exams</h2>
          <IndTutCont />

          <h2 style={{ textAlign: "left", paddingLeft: "30px" }}>Batches</h2>
          <IndTutCont />
          <h2 style={{ textAlign: "left", paddingLeft: "30px" }}>
            Special Classes
          </h2>
          <IndTutCont />
          <h2 style={{ textAlign: "left", paddingLeft: "30px" }}>
            SSC Exams (Non technical)
          </h2>
          <IndTutCont />
        </div>
        <div className="tutor_rightsec">
          <p>Education highlights</p>

          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80">
              <path
                d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM40 67.5c-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.188 0 27.5 12.312 27.5 27.5v0c-0.019 15.18-12.32 27.481-27.498 27.5h-0.002z M50.367 33.767l-5.6-0.8-2.533-5.1c-0.462-0.765-1.289-1.269-2.233-1.269s-1.771 0.504-2.227 1.257l-0.007 0.012-2.5 5.1-5.633 0.8c-1.211 0.188-2.126 1.223-2.126 2.472 0 0.704 0.291 1.34 0.759 1.794l0.001 0.001 4.033 3.967-0.933 5.567c-0.025 0.133-0.039 0.285-0.039 0.441 0 1.381 1.119 2.5 2.5 2.5 0.416 0 0.808-0.102 1.153-0.281l-0.014 0.007 5.033-2.667 5 2.667c0.342 0.164 0.742 0.261 1.165 0.267h0.002c0.55-0.002 1.058-0.176 1.475-0.472l-0.008 0.005c0.634-0.452 1.042-1.185 1.042-2.014 0-0.16-0.015-0.317-0.044-0.469l0.003 0.015-0.933-5.567 4.033-3.967c0.472-0.445 0.766-1.074 0.766-1.773 0-0.284-0.049-0.557-0.138-0.811l0.005 0.017c-0.296-0.892-1.055-1.552-1.986-1.698l-0.014-0.002z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              <span>Worked at</span>Metis Eduventures Private Limited ( Adda247
              and Career Power)
            </h6>
          </div>
          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80" class="">
              <path
                d="M72.2 33.333c-0.001-1.012-0.612-1.881-1.484-2.26l-0.016-0.006-29.7-13.033c-0.293-0.142-0.637-0.225-1-0.225s-0.707 0.083-1.014 0.231l-29.686 13.027c-0.881 0.4-1.482 1.271-1.482 2.283s0.601 1.884 1.466 2.277l0.016 0.006 8.4 3.7 2.3 15.8c0.127 0.79 0.599 1.449 1.254 1.827l0.012 0.007c5.309 2.942 11.577 4.833 18.247 5.228l0.12 0.006c7.017-0.462 13.5-2.332 19.307-5.329l-0.274 0.129c0.709-0.369 1.212-1.048 1.332-1.853l0.002-0.014 2.3-15.8 4.533-2v6.167c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v0-8.867c0.227-0.371 0.362-0.819 0.367-1.299v-0.001zM55.233 53.1c-4.549 2.257-9.861 3.73-15.477 4.094l-0.123 0.006c-5.481-0.33-10.55-1.796-15.072-4.164l0.205 0.098-1.667-11.433 15.9 6.967c0.28 0.147 0.611 0.234 0.963 0.234 0.013 0 0.026-0 0.039-0h-0.002c0.004 0 0.009 0 0.014 0 0.36 0 0.699-0.086 0.999-0.239l-0.012 0.006 15.9-6.967zM40 43.667l-23.333-10.333 23.333-10.3 23.5 10.3z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              Studied at Delhi Technological University (M.B.A)
            </h6>
          </div>
          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80" class="">
              <path
                d="M40 72.5c-0.003 0-0.008 0-0.012 0-0.687 0-1.308-0.28-1.755-0.733l-17.567-17.567c-4.963-4.954-8.033-11.803-8.033-19.369 0-15.114 12.252-27.367 27.367-27.367s27.367 12.252 27.367 27.367c0 7.566-3.070 14.415-8.033 19.369l-17.567 17.567c-0.447 0.453-1.068 0.733-1.755 0.733-0.004 0-0.008 0-0.012 0h0.001zM24.2 50.667l15.8 15.8 15.8-15.8c4.057-4.049 6.567-9.647 6.567-15.831 0-12.353-10.014-22.367-22.367-22.367s-22.367 10.014-22.367 22.367c0 6.184 2.51 11.782 6.566 15.831l0 0z M40 46.667c-6.48 0-11.733-5.253-11.733-11.733s5.253-11.733 11.733-11.733c6.48 0 11.733 5.253 11.733 11.733 0 0.012 0 0.023-0 0.035v-0.002c-0.019 6.466-5.265 11.7-11.733 11.7 0 0-0 0-0 0v0zM40 28.233c-3.682 0-6.667 2.985-6.667 6.667s2.985 6.667 6.667 6.667c3.682 0 6.667-2.985 6.667-6.667v0c0-0.030 0.001-0.065 0.001-0.1 0-3.682-2.985-6.667-6.667-6.667-0 0-0.001 0-0.001 0v0z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              <span>Lives in</span>Delhi, India
            </h6>
          </div>
          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80" class="">
              <path
                d="M40 72.5c-17.949 0-32.5-14.551-32.5-32.5s14.551-32.5 32.5-32.5c17.949 0 32.5 14.551 32.5 32.5v0c-0.019 17.942-14.558 32.481-32.498 32.5h-0.002zM40 12.5c-15.188 0-27.5 12.312-27.5 27.5s12.312 27.5 27.5 27.5c15.188 0 27.5-12.312 27.5-27.5v0c-0.019-15.18-12.32-27.481-27.498-27.5h-0.002z M28.467 31.967c0.894 5.633 5.715 9.887 11.53 9.887 5.756 0 10.538-4.168 11.493-9.651l0.010-0.070c0.106-0.373 0.167-0.802 0.167-1.245 0-0.008 0-0.015-0-0.023v0.001c0-0.387-0.313-0.7-0.7-0.7v0h-21.933c-0.387 0-0.7 0.313-0.7 0.7v0 0c-0.020 0.16-0.032 0.345-0.032 0.533s0.012 0.373 0.034 0.555l-0.002-0.022z M45.733 48.933c-0.527-2.743-2.908-4.788-5.767-4.788s-5.24 2.045-5.761 4.751l-0.006 0.037c-0.014 0.1-0.022 0.216-0.022 0.333s0.008 0.233 0.024 0.346l-0.001-0.013c-0.001 0.011-0.002 0.023-0.002 0.035 0 0.166 0.134 0.3 0.3 0.3 0.013 0 0.025-0.001 0.037-0.002l-0.001 0h10.967c0.010 0.001 0.022 0.002 0.033 0.002 0.184 0 0.333-0.149 0.333-0.333 0-0.001 0-0.001 0-0.002v0c-0.028-0.25-0.075-0.476-0.14-0.694l0.007 0.027z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              Unacademy Educator since 1st July, 2019
            </h6>
          </div>
          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80" class="">
              <path
                d="M46.433 40c0 3.553-2.88 6.433-6.433 6.433s-6.433-2.88-6.433-6.433c0-3.553 2.88-6.433 6.433-6.433s6.433 2.88 6.433 6.433z M18.8 63.7c-0.016 0-0.035 0.001-0.053 0.001-0.674 0-1.281-0.281-1.712-0.733l-0.001-0.001c-5.889-5.872-9.532-13.994-9.532-22.967s3.644-17.094 9.532-22.966l0.001-0.001c0.449-0.46 1.074-0.745 1.767-0.745s1.318 0.285 1.766 0.745l0 0.001c0.452 0.452 0.731 1.077 0.731 1.767s-0.279 1.314-0.731 1.767v0c-4.985 4.968-8.070 11.84-8.070 19.433s3.085 14.465 8.069 19.433l0.001 0.001c0.452 0.452 0.731 1.077 0.731 1.767s-0.279 1.314-0.731 1.767v0c-0.447 0.453-1.068 0.733-1.755 0.733-0.004 0-0.008 0-0.012 0h0.001z M61.2 63.7c-0.003 0-0.008 0-0.012 0-0.687 0-1.308-0.28-1.755-0.733l-0-0c-0.452-0.452-0.731-1.077-0.731-1.767s0.279-1.314 0.731-1.767v0c4.985-4.968 8.070-11.84 8.070-19.433s-3.085-14.465-8.069-19.433l-0.001-0.001c-0.452-0.452-0.731-1.077-0.731-1.767s0.279-1.314 0.731-1.767v0c0.449-0.46 1.074-0.745 1.767-0.745s1.318 0.285 1.766 0.745l0 0.001c5.889 5.872 9.532 13.994 9.532 22.967s-3.644 17.094-9.532 22.966l-0.001 0.001c-0.432 0.453-1.040 0.734-1.713 0.734-0.019 0-0.038-0-0.056-0.001l0.003 0z M52.133 54.633c-0.69-0.001-1.315-0.281-1.767-0.733v0c-0.46-0.449-0.745-1.074-0.745-1.767s0.285-1.318 0.745-1.766l0.001-0c2.636-2.661 4.264-6.324 4.264-10.367s-1.629-7.706-4.265-10.368l0.001 0.001c-0.46-0.449-0.745-1.074-0.745-1.767s0.285-1.318 0.745-1.766l0.001-0c0.452-0.452 1.077-0.731 1.767-0.731s1.314 0.279 1.767 0.731v0c3.547 3.562 5.74 8.475 5.74 13.9s-2.193 10.338-5.741 13.901l0.001-0.001c-0.459 0.441-1.079 0.718-1.764 0.733l-0.003 0z M27.867 54.633c-0.688-0.015-1.308-0.292-1.768-0.734l0.001 0.001c-3.547-3.562-5.74-8.475-5.74-13.9s2.193-10.338 5.741-13.901l-0.001 0.001c0.452-0.452 1.077-0.731 1.767-0.731s1.314 0.279 1.767 0.731v0c0.46 0.449 0.745 1.074 0.745 1.767s-0.285 1.318-0.745 1.766l-0.001 0c-2.636 2.661-4.264 6.324-4.264 10.367s1.629 7.706 4.265 10.368l-0.001-0.001c0.46 0.449 0.745 1.074 0.745 1.767s-0.285 1.318-0.745 1.766l-0.001 0c-0.452 0.453-1.077 0.733-1.767 0.733h-0z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              11,387,214 live minutes taught in last 30 days
            </h6>
          </div>
          <div style={{ display: "flex" }}>
            <svg width="18px" height="18px" viewBox="0 0 80 80" class="">
              <path
                d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM66.033 48.767h-11.567c0.565-2.632 0.893-5.659 0.9-8.761v-0.005c-0.018-2.745-0.272-5.418-0.742-8.016l0.042 0.282h11.033c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001c0.733 2.312 1.159 4.972 1.167 7.73v0.004c-0.008 3.141-0.544 6.154-1.525 8.958l0.058-0.192zM30.567 48.767c-0.593-2.621-0.933-5.631-0.933-8.72 0-0.016 0-0.033 0-0.049v0.003c0.019-2.747 0.297-5.417 0.811-8.002l-0.045 0.269h19.2c0.47 2.316 0.748 4.986 0.767 7.718l0 0.015c-0.002 3.083-0.341 6.086-0.985 8.974l0.051-0.274zM48.033 53.767c-1.925 4.893-4.646 9.081-8.045 12.612l0.012-0.012c-3.394-3.537-6.116-7.748-7.944-12.409l-0.089-0.258zM13.967 48.767c-0.922-2.613-1.459-5.626-1.467-8.763v-0.004c-0-0.019-0-0.042-0-0.065 0-2.784 0.427-5.468 1.218-7.991l-0.051 0.189c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001h11.033c-0.436 2.36-0.69 5.080-0.7 7.858v0.008c0.012 3.087 0.339 6.090 0.951 8.988l-0.051-0.288h-11.233zM31.7 27.267c1.868-5.306 4.699-9.854 8.314-13.649l-0.014 0.015c3.601 3.779 6.432 8.328 8.219 13.37l0.081 0.263zM64.333 27.267h-10.833c-1.62-5.343-4.094-9.985-7.299-14.019l0.066 0.086c7.891 1.89 14.333 6.979 17.995 13.787l0.072 0.147zM33.733 13.333c-3.079 3.954-5.498 8.597-6.992 13.638l-0.075 0.295h-11c3.734-6.954 10.176-12.044 17.879-13.895l0.188-0.038zM16.167 53.7h10.5c1.699 4.974 4.111 9.279 7.162 13.045l-0.062-0.079c-7.548-1.804-13.765-6.507-17.53-12.839l-0.070-0.127zM46.167 66.767c3.010-3.719 5.444-8.055 7.076-12.767l0.090-0.3h10.6c-3.843 6.478-10.089 11.187-17.479 12.929l-0.187 0.037z"
                fill="var(--color-i-black)"
                fill-rule="unset"
                clip-rule="unset"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              ></path>
            </svg>
            <h6
              style={{
                height: "18px",
                width: "100%",
                border: "none",
                marginTop: "-4px",
                padding: "6px",
              }}
            >
              Knows Hindi and English
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const IndTutCont = () => {
  const { tutor } = useSelector((state) => ({ tutor: state.tutor }));
  console.log(tutor);
  return (
    <div style={{ width: "100%", height: "400px", border: "none" }}>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        <div className="tutor_container">
          <img src="https://edge.uacdn.net/static/thumbnail/course/ABF498DC-972D-472C-AF64-214AB08F24CA_plus.png?q=100&w=512" />
          <p>
            <span
              style={{
                borderRadius: "2px",
                backgroundColor: "#E9EEF266",
                padding: "6px",
              }}
            >
              Hindi
            </span>
            <span style={{ color: "#2D81F7", fontWeight: "bold" }}>
              RBI GRADE B PHASE 2
            </span>
          </p>
          <p>Course on Descriptive Writing for RBI Grade B/ IBPS PO/ SBI PO</p>
          <p>Lesson 2 - Aug 18,2022 3:00PM</p>
          <p>{tutor.name}</p>
        </div>

        <div className="tutor_container">
          <img src="https://edge.uacdn.net/static/thumbnail/course/ABF498DC-972D-472C-AF64-214AB08F24CA_plus.png?q=100&w=512" />
          <p>
            <span
              style={{
                borderRadius: "2px",
                backgroundColor: "#E9EEF266",
                padding: "6px",
              }}
            >
              Hindi
            </span>
            <span style={{ color: "#2D81F7", fontWeight: "bold" }}>
              RBI GRADE B PHASE 2
            </span>
          </p>
          <p>Course on Descriptive Writing for RBI Grade B/ IBPS PO/ SBI PO</p>
          <p>Lesson 2 - Aug 18,2022 3:00PM</p>
          <p>{tutor.name}</p>
        </div>
        <div className="tutor_container">
          <img src="https://edge.uacdn.net/static/thumbnail/course/ABF498DC-972D-472C-AF64-214AB08F24CA_plus.png?q=100&w=512" />
          <p>
            <span
              style={{
                borderRadius: "2px",
                backgroundColor: "#E9EEF266",
                padding: "6px",
              }}
            >
              Hindi
            </span>
            <span style={{ color: "#2D81F7", fontWeight: "bold" }}>
              RBI GRADE B PHASE 2
            </span>
          </p>
          <p>Course on Descriptive Writing for RBI Grade B/ IBPS PO/ SBI PO</p>
          <p>Lesson 2 - Aug 18,2022 3:00PM</p>
          <p>{tutor.name}</p>
        </div>
      </div>
    </div>
  );
};
