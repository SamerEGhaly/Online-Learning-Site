import "../CSS/course.css"

function Course(){
    return(
        <div className="course-card">
            <img src="/src/assets/Images/black_289x210.png" alt="course thumbnail" className="course-thumbnail" />
            <div className="course-details">
                <p className="course-tag">Popular</p>
                <h2 className="course-title">Course Title</h2>
                <p className="course-duration">Duration : 25mins</p>
                <p className="course-price">$15.90</p>
                <img src="/src/assets/Images/cloud-academy-logo.png" alt="platform logo" className="course-platform" />
                <div className="rating">
                    <div className="stars"></div>
                    <p className="reviews-count">(400)</p>
                </div>
            </div>
                <button className="enroll-button">Enroll Now</button>
            <a href="#" className="more-info-link">View More Info</a>
        </div>
    )
}

export default Course