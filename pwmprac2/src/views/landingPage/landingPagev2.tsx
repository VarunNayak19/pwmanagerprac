import { useState } from 'react'
import '../../components/form/form.css'
import '../../components/input/input.css'
import '../../components/buttons/buttons.css'
import LockLogo from '../../components/lockLogo/lockLogo'
import './landingPage.css'

const LandingPagev2 = () => {
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

    const signUpfromdata = (e: any) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setsignUpdata({ ...signUpdata, [name]: value })
        const MPIN = e.target.mpin.value;
        const RMPIN = e.target.cMpin.value;

        if (MPIN === RMPIN) {
            let recordList = JSON.parse(localStorage.getItem("signup") || "[]")
            console.log("mn", recordList.mobileNumber);
            recordList.push(signUpdata)
            localStorage.setItem("signup", JSON.stringify(recordList))
            setshowLogin(true)
            setshowSignUp(false)
            setshowToast(true)
            setTimeout(() => setshowToast(false), 3000);
        }
        else {
            alert("Mpins dont match")
        }

    }
    return (
        <>

        </>

    )
}

export default LandingPagev2