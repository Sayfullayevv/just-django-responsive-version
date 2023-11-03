import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(  ) {
    const [change, setchange] = useState(false)
    const [bar, setbar] = useState(false)

    function changestate() {
        if (change == true) {
            return setchange(false)
        }
        setchange(true)
    }

    function barshow() {
        if (bar == true) {
            setbar(false)
        }
        setbar(true)
    }
    return (
        <>
            <header className='wrapper'>
                <nav>
                    <ul>
                        <div className="left">
                            <div className='left__img'>
                                <img src="https://justdjango.com/logo.svg" width={'32px'} height={'32px'} alt="" />
                                <p><span><Link to={'/'}>JustDjango</Link></span> <span onClick={barshow}>Menu</span></p>
                            </div>
                            <div className="left__links">
                                <li> <Link to={'/courses'}>Courses</Link> </li>
                                <li> <Link to={'/blog'}>Blog</Link> </li>
                                <li> <Link to={'/pro'}>Pro</Link> </li>
                            </div>
                        </div>
                        <div className="right" >
                            <img onClick={changestate} src="https://lh3.googleusercontent.com/a/AAcHTtfMiH2OiRPnGEM7ALbFzQGod6aPggw-67ixwStrkn2k=s96-c" width={'32px'} height={'32px'} alt="" />
                            <div className='profileuchun' style={{
                                display: `${change === true ? 'flex' : 'none'
                                    }`,
                                zIndex: '999'
                            }}>
                                <span className='andgen'>android genymotion</span>
                                <p className='andmail'>ageny61@gmail.com</p>
                                <ul>
                                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                    <li><Link to={'/dashboard/billing'}>Billing</Link></li>
                                    <li><Link to={'/dashboard/settings'}>Settings</Link></li>
                                    <li>Sign Out</li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>

            <div className="formindevices" style={{
                display: `${bar === true ? 'flex' : 'none'
                    }`
            }}>
                <i onClick={() => setbar(false)} id='close' class="ri-close-circle-fill"></i>
                <div className="bar__imgs">
                    <img src="https://justdjango.com/logo.svg" width={'32px'} height={'32px'} alt="" />
                    <p>JustDjango</p>
                </div>
                <ul>
                    <li> <Link to={'/courses'}>Courses</Link> </li>
                    <li> <Link to={'/blog'}>Blog</Link> </li>
                    <li> <Link to={'/pro'}>Pro</Link> </li>
                </ul>
            </div>
        </>
    )
}
