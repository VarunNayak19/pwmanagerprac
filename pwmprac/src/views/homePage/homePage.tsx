
import { useState } from 'react'
import CopyPassword from '../../components/copyPassword/copyPassword/copyPassword'
import './homePage.css'

// var retfData: any = [];
const HomePage = () => {
    // if (retfData === "[]" || undefined) {
    //     retfData = retData;
    // }
    const [showOverlay, setshowOverlay] = useState(false)

    const showO = () => {
        setshowOverlay(true)
        setsetModal1(true)
        setsetModal2(false)
    }
    const hideO = () => {
        setshowOverlay(false)
        setsetModal1(false)
        setsetModal2(true)
    }

    const [users, setUsers] = useState({
        url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: ""
    })

    let name: any, value: any;
    const handleInput = (r: any) => {
        name = r.target.name;
        value = r.target.value;
        setUsers({ ...users, [name]: value })
    }
    const [initialData, setinitialData] = useState({
        url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: ""
    })
    const getFormData = (e: any) => {
        // var retfData: any = [];
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUsers({ ...users, [name]: value })
        var retfData = JSON.parse(localStorage.getItem("formdata") || '[]');
        // retfData.push(users)
        retfData = [...retfData, users]
        localStorage.setItem("formdata", JSON.stringify(retfData))
        setinitialData(retfData);
        setUsers({ url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
        setshowOverlay(false)
        // console.log("users", users);
        // console.log("retfData", retfData)
    }

    const resetData = () => {
        setUsers({ url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
    }

    const retrData = JSON.parse(localStorage.getItem("formdata") || '[]');
    // console.log("retrData", retrData);
    // console.log("sitenames", retrData.siteName);
    // console.log(retrData.length)

    const [setModal1, setsetModal1] = useState(true)
    const [setModal2, setsetModal2] = useState(false)
    const [setModal3, setsetModal3] = useState(false)
    const [setIndex, setsetIndex] = useState(0)
    const [setDisplay, setsetDisplay] = useState({ url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
    const showModal2fn = (id: any) => {

        showO()
        setsetModal1(false)
        setsetModal2(true)
        setsetModal3(false)
        setsetIndex(id)
        const siteDets = JSON.parse(localStorage.getItem("formdata") || "[]");
        const displayData = siteDets[id];
        setsetDisplay(displayData);
        // console.log("displayData", displayData);
    }
    // console.log("setdisplay", setDisplay);

    const [editDets, seteditDets] = useState({ url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
    const showEditModalFn = (e: any) => {
        showO()
        setsetModal1(false)
        setsetModal2(false)
        setsetModal3(true)
        // setsetIndex(id)
        // const siteDets2 = JSON.parse(localStorage.getItem("formdata") || "[]");
        // const displayData2 = siteDets2[id];
        seteditDets(setDisplay);
        // console.log("displayData2", displayData2);

    }
    // console.log("editdets", editDets);
    // const [updatedList, setupdatedList] = useState({ url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
    const upDateForm = (e: any) => {
        e.preventDefault();


    }

    return (
        <>
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
                                    <div className='counter'>
                                        {/* if({retrData.length} <  {10}){
                                        "0" + { retrData.length }
                                    } */}

                                        {retrData.length}
                                    </div>
                                    <div className='dropdown'><img src={require("../../assets/image/Path Copy.png")} alt="dropdown" className='dropdownIcon' /></div>
                                </div>
                            </div>
                            <div className='titleRightSide'>
                                <div className='searchBar'>
                                    <input type="text" placeholder='Search' className='searchBarInput' />
                                    <img src={require("../../assets/image/search.png")} alt="searchIcon" className='searchIcon' />
                                </div>
                                <img src={require("../../assets/image/add_btn.png")} alt="addIcon" className='addIcon' onClick={showO} />
                            </div>
                        </div>
                        {/* {
                        retrData.length === { 0} ?
                            <>

                            </>
                    } */}


                        {/* <div className="additemDiv">
                            <p>Please Click on the ???+??? symbol
                                to add sites</p>
                        </div> */}

                        <div className="showGrids">
                            {(() => {
                                switch (retrData.length) {
                                    case 0: return <div className="additemDiv">
                                        <p>Please Click on the ???+??? symbol
                                            to add sites</p>
                                    </div>;
                                    default: return <></>;
                                }
                            })()}
                            {
                                retrData.map((elem: any, ind: any) => {

                                    return (

                                        <div className='eachGridItem' key={ind} onClick={() => { showModal2fn(ind) }}>
                                            <div className='siteContainer'>
                                                <div className='siteHead'>
                                                    {(() => {
                                                        switch (retrData[ind].siteName) {
                                                            case "facebook": return <img src={require("../../assets/appIcons/facebookIcon.png")} alt="" height={"50px"} />;
                                                            case "instagram": return <img src={require("../../assets/appIcons/instagramIcon.png")} alt="" height={"50px"} />;
                                                            case "gmail": return <img src={require("../../assets/appIcons/gmailIcon.png")} alt="" height={"50px"} />;
                                                            case "linkedin": return <img src={require("../../assets/appIcons/linkedinIcon.png")} alt="" height={"50px"} />;
                                                            case "pinterest": return <img src={require("../../assets/appIcons/pinterestIcon.png")} alt="" height={"50px"} />;
                                                            case "twitter": return <img src={require("../../assets/appIcons/twitterIcon.png")} alt="" height={"50px"} />;
                                                            case "youtube": return <img src={require("../../assets/appIcons/youtubeIcon.png")} alt="" height={"50px"} />;
                                                            default: return <img src={require("../../assets/appIcons/undefinedIcon.png")} alt="" width={"50px"} height={"50px"} />;
                                                        }
                                                    })()}



                                                    <div className='siteDetails'>

                                                        <p className='siteName'>{retrData[ind].siteName}</p>
                                                        <div>
                                                            <CopyPassword />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='siteLink'>
                                                    www.{retrData[ind].siteName}.com
                                                </div>

                                            </div>
                                        </div>
                                    )


                                })
                            }

                            {
                                showOverlay &&

                                <div className="modal" >
                                    <div className="overlay" onClick={hideO} ></div>
                                    <div className="addSiteModal">

                                        {<>

                                            {
                                                setModal1 &&
                                                <form className='modal1' onSubmit={getFormData}>
                                                    <div className='siteNameModalHead'>Add Site</div>
                                                    <div className='line1 flexColuming'>
                                                        <label className='modalLabels'>URL</label>
                                                        <input type="text" name="url" id="" className='urlInput modalInputBox paddingForDisplay' value={users.url} onChange={handleInput} />
                                                    </div>
                                                    <div className='line2 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>Site Name</label>
                                                            <input type="text" name="siteName" id="" value={users.siteName} onChange={handleInput} className='urlInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Sector/Folder</label>
                                                            <input type="text" name="sector" id="" value={users.sector} onChange={handleInput} className='sectorInput modalInputBox paddingForDisplay' />
                                                        </div>

                                                    </div>
                                                    <div className='line3 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>User Name</label>
                                                            <input type="text" name="userName" id="" value={users.userName} onChange={handleInput} className='usernameInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Site Password</label>
                                                            <input type="text" name="sitepass" id="" value={users.sitepass} onChange={handleInput} className='passwordInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                    </div>
                                                    <div className='line4 flexColuming'>
                                                        <label className='modalLabels'>Notes</label>
                                                        <textarea name="notes" id="" value={users.notes} onChange={handleInput} className='textAreaInput modalInputBox paddingForDisplay'></textarea>
                                                    </div>
                                                    <div className='buttonsLine5'>
                                                        <button className='resetButton' onClick={resetData} >Reset</button>
                                                        <button type='submit' className='saveButton'>Save</button>
                                                    </div>
                                                    <button className="close-modal">
                                                        <img src={require("../../assets/image/close_btn.png")} alt="" onClick={hideO} className="closeButton" />
                                                    </button>
                                                </form>
                                            }


                                            {
                                                setModal2 &&
                                                // {
                                                // displayData.map((elem: any) => {
                                                //     return (

                                                <form className='modal1'>
                                                    <div className='siteNameModalHead'>Site Details</div>
                                                    <div className='line1 flexColuming'>
                                                        <label className='modalLabels'>URL</label>
                                                        {/* <input type="text" name="url" id="" className='urlInput modalInputBox' value={users.url} onChange={handleInput} /> */}
                                                        <div className='urlInput modalInputBox paddingForDisplay'>{setDisplay.url}</div>
                                                    </div>
                                                    <div className='line2 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>Site Name</label>
                                                            {/* <input type="text" name="siteName" id="" value={users.siteName} onChange={handleInput} className='urlInput modalInputBox' /> */}
                                                            <div className='urlInput modalInputBox paddingForDisplay'>{setDisplay.siteName}</div>
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Sector/Folder</label>
                                                            {/* <input type="text" name="sector" id="" value={users.sector} onChange={handleInput} className='sectorInput modalInputBox' /> */}
                                                            <div className='urlInput modalInputBox paddingForDisplay'>{setDisplay.sector}</div>
                                                        </div>

                                                    </div>
                                                    <div className='line3 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>User Name</label>
                                                            {/* <input type="text" name="userName" id="" value={users.userName} onChange={handleInput} className='usernameInput modalInputBox' /> */}
                                                            <div className='urlInput modalInputBox paddingForDisplay'>{setDisplay.userName}</div>
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Site Password</label>
                                                            {/* <input type="text" name="sitepass" id="" value={users.sitepass} onChange={handleInput} className='passwordInput modalInputBox' /> */}
                                                            <div className='urlInput modalInputBox paddingForDisplay'>{setDisplay.sitepass}</div>
                                                        </div>
                                                    </div>
                                                    <div className='line4 flexColuming'>
                                                        <label className='modalLabels'>Notes</label>
                                                        {/* <textarea name="notes" id="" value={users.notes} onChange={handleInput} className='textAreaInput modalInputBox'></textarea> */}
                                                        <div className='textAreaInput modalInputBox paddingForDisplay'>{setDisplay.notes}</div>
                                                    </div>
                                                    {/* <div className='buttonsLine5'>
                                                        <button className='resetButton' onClick={resetData} >Reset</button>
                                                        <button type='submit' className='saveButton'>Save</button>
                                                    </div> */}
                                                    <button className="close-modal">
                                                        <img src={require("../../assets/image/close_btn.png")} alt="" onClick={hideO} className="closeButton" />
                                                    </button>
                                                    <button type='submit' className='saveButton editButton' onClick={showEditModalFn}>Edit</button>
                                                </form>
                                                //     )
                                                // })
                                                // }
                                            }

                                            {
                                                setModal3 &&
                                                <form className='modal1' onSubmit={upDateForm}>
                                                    <div className='siteNameModalHead'>Add Site</div>
                                                    <div className='line1 flexColuming'>
                                                        <label className='modalLabels'>URL</label>
                                                        <input type="text" name="url" id="" className='urlInput modalInputBox paddingForDisplay' value={editDets.url} onChange={(e: any) => seteditDets(e.target.value)} />
                                                    </div>
                                                    <div className='line2 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>Site Name</label>
                                                            <input type="text" name="siteName" id="" value={editDets.siteName} onChange={(e: any) => seteditDets(e.target.value)} className='urlInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Sector/Folder</label>
                                                            <input type="text" name="sector" id="" value={editDets.sector} onChange={(e: any) => seteditDets(e.target.value)} className='sectorInput modalInputBox paddingForDisplay' />
                                                        </div>

                                                    </div>
                                                    <div className='line3 rowFlexing'>
                                                        <div className='leftInput flexColuming'>
                                                            <label className='modalLabels'>User Name</label>
                                                            <input type="text" name="userName" id="" value={editDets.userName} onChange={(e: any) => seteditDets(e.target.value)} className='usernameInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                        <div className='rightInput flexColuming'>
                                                            <label className='modalLabels'>Site Password</label>
                                                            <input type="text" name="sitepass" id="" value={editDets.sitepass} onChange={(e: any) => seteditDets(e.target.value)} className='passwordInput modalInputBox paddingForDisplay' />
                                                        </div>
                                                    </div>
                                                    <div className='line4 flexColuming'>
                                                        <label className='modalLabels'>Notes</label>
                                                        <textarea name="notes" id="" value={editDets.notes} onChange={(e: any) => seteditDets(e.target.value)} className='textAreaInput modalInputBox paddingForDisplay'></textarea>
                                                    </div>
                                                    <div className='buttonsLine5'>
                                                        {/* <button className='resetButton' onClick={resetData} >Reset</button> */}
                                                        <button type='submit' className='saveButton'>Update</button>
                                                    </div>
                                                    <button className="close-modal">
                                                        <img src={require("../../assets/image/close_btn.png")} alt="" onClick={hideO} className="closeButton" />
                                                    </button>
                                                </form>
                                            }
                                        </>}
                                    </div>
                                </div>

                            }

                        </div>
                    </div>
                </div>
            </div ></>)
}

export default HomePage