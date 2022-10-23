import React from 'react'
import './homePage.css'
const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="sideBar"></div>
            <div className="mainContent">
                <div className="header">
                    <div className='logo'>
                        <img src={require("../../assets/image/pass_logo.png")} alt="password master" className='logoImage' />
                    </div>
                    <div className='tabOptions'>
                        <img src={require("../../assets/image/sync.png")} alt="sync" className='iconTab' />
                        <img src={require("../../assets/image/profilepc.png")} alt="profile" className='iconTab' />
                    </div>
                </div>
                <div className="content">
                    <div className='titleAndSearch'>
                        <div className='titleLeftSide'>
                            <div className='sitesHeading'>
                                <p className='sitesP'>Sites</p>
                                <div className='orangeUnderline'></div>
                            </div>
                            <div className='subHead'>
                                <div className='subHeadTitle'>Social Media</div>
                                <div className='counter'>07</div>
                                <div className='dropdown'><img src={require("../../assets/image/Path Copy.png")} alt="dropdown" className='dropdownIcon' /></div>
                            </div>
                        </div>
                        <div className='titleRightSide'>
                            <div className='searchBar'>
                                <input type="text" placeholder='Search' className='searchBarInput' />
                                <img src={require("../../assets/image/search.png")} alt="searchIcon" className='searchIcon' />
                            </div>
                            <img src={require("../../assets/image/add_btn.png")} alt="addIcon" className='addIcon' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage