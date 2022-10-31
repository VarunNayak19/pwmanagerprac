import { useState, useEffect } from 'react'
import '../../components/form/form.css'
import "../../components/buttons/buttons.css"
import { Navigate, useNavigate } from 'react-router-dom'
import LockLogo from '../../components/lockLogo/lockLogo'
import './landingPage.css'
import { encrypt, decrypt } from 'n-krypta'
// import "./lp.css"
const LandingPage = () => {
    const key = 'reactjs'
    const navigate = useNavigate();
    const [showLogin, setshowLogin] = useState(true)
    const [showSignUp, setshowSignUp] = useState(false)
    const [showToast, setshowToast] = useState(false)
    const signUpFn = () => {
        setshowLogin(false)
        setshowSignUp(true)
    }
    const [signUpdata, setsignUpdata] = useState({ mobileNumber: "", mpin: "", cMpin: "" })
    let name: any, value: any

    const handleChange = (e: any) => {
        name = e.target.name;
        value = e.target.value;
        setsignUpdata({ ...signUpdata, [name]: value })
    }

    const [pin, setpin] = useState(false)

    const toggleye = () => {
        setpin(!pin)
    }

    const [orange1, setorange1] = useState(true)
    const [orange2, setorange2] = useState(false)
    const signInmob = () => {
        setshowLogin(true)
        setorange1(true)
        setorange2(false)
        setshowSignUp(false)
    }
    const signUpmob = () => {
        setshowLogin(false)
        setorange1(false)
        setorange2(true)
        setshowSignUp(true)
    }

    const storeUsers = localStorage.getItem("signup") || "[]";
    console.log("storeusers", storeUsers)
    const signUpfromdata = (event: any) => {
        event.preventDefault();
        const mobile = event.target.mobileNumber.value;
        const pin = event.target.mpin.value;
        const epin = encrypt(pin, key)
        const mPin = event.target.cMpin.value;
        const emPin = encrypt(mPin, key)

        const userData = {
            mobile,
            epin,
            emPin,
        };
        const previousData = JSON.parse(localStorage.getItem("signup") || "[]")
        const arr: any[] = [];

        previousData.map((user: any) => {
            if (userData.mobile === user.mobile) {
                arr.push("exist");
            }
        });
        if (arr.includes("exist")) {
            alert("user already exist");
        } else {
            if (mobile === "" && epin === "" && emPin === "") {
                alert("enter all fields");
            } else {
                if (epin === emPin) {
                    previousData.push(userData);
                    localStorage.setItem("signup", JSON.stringify(previousData));
                    localStorage.setItem(JSON.stringify(mobile), JSON.stringify([]));
                    setshowLogin(true)
                    setshowSignUp(false)
                    setshowToast(true)
                    setTimeout(() => setshowToast(false), 3000);
                } else {
                    alert("enter same pins");
                }
            }
        }
    };


    const signInSubmit = (e: any) => {
        e.preventDefault();

        const mobile = e.target.mobileNumber.value;
        const mPin = e.target.mpin.value;
        console.log(mobile, mPin);
        const newArr: any[] = [];
        const userData = JSON.parse(localStorage.getItem("signup") || "[]");
        userData.map((user: any) => {
            const dmPin = decrypt(user.emPin, key)
            console.log(user.mobile, user.mPin)
            if (mobile === user.mobile && mPin === dmPin) {
                newArr.push("user exists");
            }
            else if (mobile === user.mobile && mPin !== dmPin) {
                newArr.push("wrong password");
            }
            else {
                newArr.push("no account");
            }

        });
        if (newArr.includes("user exists")) {
            localStorage.setItem("currentUser", JSON.stringify(mobile));
            navigate("/home");
        }
        else if (newArr.includes("wrong password")) {
            alert("wrong Mpin")
        }
        else if (newArr.includes("no account")) {
            localStorage.setItem("currentUser", JSON.stringify([mobile]));
            alert("please check if the mobile number is registered")
        }
        localStorage.setItem('auth', 'true')


    };
    return (
        <div className='mainConten'>
            {/* main content  */}
            <div className='mainContent'>
                {
                    showToast &&
                    <div className='greenBox'>
                        <p className='congratsText'>Congrats!!! Success, Signin to access the valut</p>
                        <i className="fa-solid fa-xmark crossSymbol"></i>
                    </div>
                }
                {/* blue box div */}
                <div className="blueBox" >
                    <LockLogo />
                    {
                        showLogin &&
                        <>
                            <div className="tabsForMobile sinTab">
                                <div className="signinMob" onClick={signInmob}>
                                    <p className='mobP'>SIGN IN</p>
                                    {
                                        orange1 && <div className="orange"></div>
                                    }

                                </div>
                                <div className="signUpMob" onClick={signUpmob}>
                                    <p className='mobP'>SIGN UP</p>
                                    {
                                        orange2 && <div className="orange"></div>
                                    }
                                </div>
                            </div>
                            <form className="signInBox signInmob" onSubmit={signInSubmit}>
                                <div className='formBox'>
                                    <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>
                                    <div className="usernameBox">
                                        {/* <Input placeholder="Mobile Number" /> */}
                                        <input type="text" placeholder="Mobile Number" pattern='[0-9]+' className='input' name='mobileNumber' minLength={10} maxLength={10} />
                                    </div>
                                    <div className="mpinBox">
                                        {/* <Input placeholder="MPin" minValue={4} maxValue={4} /> */}
                                        <input type={pin ? "text" : "password"} placeholder='Mpin' minLength={4} maxLength={4} className="input" name='mpin' />
                                        <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" onClick={toggleye} />
                                    </div>
                                    <div className="bottomBox">
                                        <p className="forgotPasswordText">Forgot your password?</p>
                                        <div className="buttonDiv">

                                            {/* <Buttons value="SIGN IN" /> */}
                                            <button className='button' type='submit'>SIGN IN</button>

                                        </div>
                                        <p className="signUpText">Don’t have a Account? <span onClick={signUpFn}>SIGNUP</span> </p>
                                    </div>
                                </div>
                            </form>
                        </>
                    }

                    {
                        showSignUp &&

                        <>
                            <div className="tabsForMobile ">
                                <div className="signinMob" onClick={signInmob}>
                                    <p className='mobP'> SIGN IN</p>
                                    {
                                        orange1 && <div className="orange"></div>
                                    }
                                </div>
                                <div className="signUpMob" onClick={signUpmob}>
                                    <p className='mobP'>SIGN UP</p>
                                    {
                                        orange2 && <div className="orange"></div>
                                    }
                                </div>
                            </div>
                            <form className="signInBox" onSubmit={signUpfromdata}>
                                <p className="signInHeading">SIGN UP</p>
                                <div className="usernameBox">
                                    {/* <Input placeholder="Mobile Number" /> */}
                                    <input type="text" placeholder="Mobile Number" pattern='[0-9]+' className='input' name='mobileNumber' onChange={handleChange} minLength={10} maxLength={10} />
                                </div>
                                <div className="mpinBox">
                                    {/* <Input placeholder="MPin" minValue={4} maxValue={4} /> */}
                                    <input type={pin ? "text" : "password"} placeholder='Enter Mpin' minLength={4} maxLength={4} className="input" name='mpin' onChange={handleChange} />
                                    <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" onClick={toggleye} />
                                </div>
                                <div className="mpinBox">
                                    {/* <Input placeholder="MPin" minValue={4} maxValue={4} /> */}
                                    <input type={pin ? "text" : "password"} placeholder='Re-Enter Mpin' minLength={4} maxLength={4} className="input" name='cMpin' onChange={handleChange} />
                                    <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" onClick={toggleye} />
                                </div>
                                <div className="bottomBox">
                                    {/* <p className="forgotPasswordText">Forgot your password?</p> */}
                                    <div className="buttonDiv ">

                                        {/* <Buttons value="SIGN IN" /> */}
                                        <button className='button signUpBtn' >SIGN UP</button>

                                    </div>
                                    {/* <p className="signUpText">Don’t have a Account? SIGNUP</p> */}
                                </div>
                            </form>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage