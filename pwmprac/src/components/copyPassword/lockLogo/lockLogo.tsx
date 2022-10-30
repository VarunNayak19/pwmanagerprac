import React from 'react'
import './lockLogo.css'
const LockLogo = () => {
    return (
        <>
            <div className='logoContent'>
                <img src={require("../../assets/image/logo.png")} alt="" className='lockLogo' />
                <img src={require("../../assets/image/mobilelogo.png")} alt="" className='mobileLogo' />
                <p className='protectText'>Protect & Manage every password in your business</p>

            </div>
        </>
    )
}

export default LockLogo