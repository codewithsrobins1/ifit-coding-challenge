import React from 'react'

//Images
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import pinterest from '../images/pinterest.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-section__main">
                <div className="footer-section__main-container">
                    <div className="footer-section__main-container--info"> 
                        <h2 className="footer-section__main-container--info-title">Company</h2>
                        <ul className="footer-section__main-container--info-list">
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-section__main-container--info">
                        <h2 className="footer-section__main-container--info-title">Account</h2>
                        <ul className="footer-section__main-container--info-list">
                            <li>Login</li>
                            <li>Create Account</li>
                        </ul>
                    </div>
                    <div className="footer-section__main-container--info">
                        <h2 className="footer-section__main-container--info-title">Support</h2>
                        <ul className="footer-section__main-container--info-list">
                            <li>Help Center</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-section__social">
                <ul className="footer-section__social--container">
                    <li><img className="footer-section__social--container-image" src={facebook} alt="facebook" /></li>
                    <li><img className="footer-section__social--container-image" src={instagram} alt="instagram" /></li>
                    <li><img className="footer-section__social--container-image" src={pinterest} alt="pinterest" /></li>
                    <li><img className="footer-section__social--container-image" src={twitter} alt="twitter" /></li>
                    <li><img className="footer-section__social--container-image" src={youtube} alt="youtube" /></li>
                </ul>
            </div>
            <div className="footer-section__copyright">
                <div className="footer-section__copyright--container">
                    <div className="footer-section__copyright--container-language">
                        <select name="language">
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="chinese">Chinese</option>
                            <option value="german">German</option>
                            <option value="japanese">Japanese</option>
                        </select>
                    </div>

                    <ul className="footer-section__copyright--container-legal">
                       <li id="copyright">&copy; iFit.com. All Rights Reserved</li>
                       <li>Privacy Policy</li>
                       <li>Terms of Use</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
