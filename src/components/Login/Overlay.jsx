import './Overlay.css'
import CloseIcon from '@mui/icons-material/Close';
import { phoneNumber, showSide } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {auth,firebase} from '../utils/Config'
import {useNavigate} from 'react-router-dom'

export const Overlay = () => {


    const {show} =useSelector((state)=>({show:state.show}))
    const dispatch = useDispatch()

    const [mobile,setMobile]=useState(0)
    const [otp,setOtp]=useState(0)

    const navigate=useNavigate()



    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: function (response) {
              console.log("Captcha Resolved");
              // this.onSignInSubmit();
              this.fromsubmit()
            },
            defaultCountry: "IN",
          }
        );
      }, []);


    const handleClick=()=>{
       
        document.getElementById("overlayLogin").style.display="none";
        dispatch(showSide(!show))
    }
    const handleClick1=()=>{
        document.getElementById("overlayLogin1").style.display="none";
        document.getElementById("overlayLogin").style.display="none";
    }
    const fromsubmit=(e)=>{
        e.preventDefault();
        console.log(mobile,otp);
        window.overloginbtn.style.display='none'
        window.oververifybtn.style.display='block'

        let phone_number = "+91" + mobile;
        const appVerifier = window.recaptchaVerifier;
    
        auth
          .signInWithPhoneNumber(phone_number, appVerifier)
          .then((confirmationResult) => {
            console.log("otp sent");
            // setViewOtpForm(true);
            window.confirmationResult = confirmationResult;
          })
          .catch((error) => {
            alert(error.message);
          });

        document.getElementById("overinput3").style.visibility="visible";
    }


    const handleverify=()=>{
       
            window.confirmationResult.confirm(otp).then((result) => {
              // User signed in successfully.
              const user = result.user;
              console.log(JSON.stringify(user.phoneNumber))

            //   alert("User is verified")
                dispatch(phoneNumber(user.phoneNumber))

            navigate('/explore')
              // ...
            }).catch((error) => {
              // User couldn't sign in (bad verification code?)
              // ...
              navigate('/home')
              alert('Incorrect User Details Or OTP')
            });
    }



    const fromsubmit1=(e)=>{
        e.preventDefault();
        document.getElementById("overinput2").style.visibility="visible";
        
    }
    const changepage=()=>{
        document.getElementById("overlaySec").style.display="none";
        document.getElementById("overlayLogin1").style.display="block";
    }

    const changepage1=()=>{
        document.getElementById("overlayLogin1").style.display="none";
        document.getElementById("overlaySec").style.display="block";
    }
   
    return<> <div id="overlayLogin">
        <div id='overlaySec'>
            <div>

                <CloseIcon onClick={handleClick} id='closeBtn'></CloseIcon>
            </div>
            <h2 id='loginOver'>Login</h2>
            <div className='PorH6'>
                <p>or</p>
                <h6 onClick={changepage} className="overcreatebtn">create your account</h6>
            </div>
            <form action="" onSubmit={fromsubmit}>
            <input onChange={(e)=>setMobile(e.target.value)} required className='overinput' type="mobile" placeholder="+91  enter your mobile" />
            <input onChange={(e)=>setOtp(e.target.value)} type="mobile" id='overinput3' placeholder='Enter Vaild Otp' />
            <div className='overflexlast'>
                <button  type='submit' id='overloginbtn'>Login</button>
                <button  type='submit' onClick={handleverify} id='oververifybtn'>Verify</button>
                <h6 className="overcreatebtn"  >continue with email</h6>
            </div>
            </form>
        </div>



    </div>


    <div id="overlayLogin1">
         <div id='overlaySec1'>
            <div>

                <CloseIcon onClick={handleClick1} id='closeBtn1'></CloseIcon>
            </div>
            <h2 id='loginOver'>Join Unacademy</h2>
            <div className='PorH6'>
                <p>or</p>
                <h6 onClick={changepage1} className="overcreatebtn">login to your account</h6>
            </div>
            <form action="" onSubmit={fromsubmit1}>
            <input required className='overinput' type="mobile" placeholder="+91  enter your mobile" />
            <input type="mobile" id='overinput2' placeholder='Enter Vaild Otp' />
            
                <button  type='submit' id='overloginbtn1'>Continue</button>

            
            </form>
        </div>


        <div id="recaptcha-container"></div>
    </div>

    </>
}
