import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer__content">
                    <div className="footer__logo">
                        <img src="https://justdjango.com/logo.svg" width={'32px'} height={'32px'} alt="" />
                        <span>JustDjango</span>
                    </div>
                    <div className="footer__links">
                        <ul>
                            <li>Contact</li>
                            <li>T's & C's</li>
                            <li>Privacy Policy</li>
                            <li>YouTube</li>
                            <li>GitHub</li>
                            <li><i class="ri-moon-fill"></i></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
