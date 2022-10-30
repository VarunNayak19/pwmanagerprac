import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../buttons/buttons'
import Input from '../input/input'
import { useState } from 'react'
import './form.css'
const Form = () => {

    const [signIn, setsignIn] = useState(true);
    const [signUp, setsignUp] = useState(false)



    return (
        <div className='formBox'>
            <form className="signInBox">
                <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>
                <div className="usernameBox">
                    <Input placeholder="Mobile Number" />
                </div>
                <div className="mpinBox">
                    <Input placeholder="MPin" minValue={4} maxValue={4} />
                    <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                </div>
                <div className="bottomBox">
                    <p className="forgotPasswordText">Forgot your password?</p>
                    <div className="buttonDiv">
                        <Link to="/" >
                            <Buttons value="SIGN IN" />
                        </Link>
                    </div>
                    <p className="signUpText">Don’t have a Account? SIGNUP</p>
                </div>
            </form>
        </div>

    )
}

export default Form
