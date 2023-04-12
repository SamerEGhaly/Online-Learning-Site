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
            </nav>
        </header>
    )
}

export default Header