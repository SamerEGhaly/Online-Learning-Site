import "/src/CSS/header.css"

function Header(){
    return(
        <header>
            <nav className="nav-bar">
                <h1 className="title">CourseMania</h1>
                <ul className="nav-buttons">
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Tutors</li>
                    <li>Contact</li>
                </ul>
                <div className="login-register">
                    <p className="login">Login</p>
                    <button className="register">
                        Register
                    </button>
                </div>
                <a href="#" className="shopping-cart">
                    <img src="/src/assets/Images/shopping-cart.png" alt="" className="shopping-cart-icon" />
                    <div className="cart-items-count">2</div>
                </a>
            </nav>
        </header>
    )
}

export default Header