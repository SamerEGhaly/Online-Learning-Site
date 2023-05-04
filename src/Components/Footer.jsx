import "/src/CSS/footer.css"

function Footer(){
    return(
        <footer>
            <div className="useful-links">
                <ul className="site-links">
                    <li><a href="#" id="about" target="_blank">About Us</a></li>
                    <li><a href="#" id="contact" target="_blank">Contact Us</a></li>
                    <li><a href="#" id="careers" target="_blank">Careers</a></li>
                    <li><a href="#" id="blog" target="_blank">Blog</a></li>
                </ul>
                <ul className="udemy-links">
                    <li><a href="#" id="udemy-business" target="_blank">Udemy Business</a></li>
                    <li><a href="#" id="teach-on-udemy" target="_blank">Teach On Udemy</a></li>
                    <li><a href="#" id="get-the-app" target="_blank">Get The App</a></li>
                </ul>
                <ul className="support-links">
                    <li><a href="#" id="help-and-support" target="_blank">Help And Support</a></li>
                    <li><a href="#" id="privacy" target="_blank">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="social-media">
                <p className="follow">Follow Us: </p>
                <div className="social-links">
                    <a href="https://www.facebook.com" id="facebook-link" target="_blank"><img src="/src/assets/Images/facebook-icon.png" alt="facebook icon" className="facebook-icon" /></a>
                    <a href="https://www.twitter.com" id="twitter-link" target="_blank"><img src="/src/assets/Images/twitter-icon.png" alt="twitter icon" className="twitter-icon"/></a>
                    <a href="https://www.instagram.com" id="instagram-link" target="_blank"><img src="/src/assets/Images/instagram-icon.png" alt="instagram icon" className="instagram-icon" /></a>
                    <a href="https://www.youtube.com" id="youtube-link" target="_blank"><img src="/src/assets/Images/youtube-icon.png" alt="youtube icon" className="youtube-icon" /></a>
                </div>    
            </div>
        </footer>
    )
}

export default Footer