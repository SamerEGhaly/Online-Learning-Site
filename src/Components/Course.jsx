import "../CSS/course.css"

function Course(props){

    var platformLogo

    switch (props.platform) {
        case "cloud academy":
            platformLogo = "/src/assets/Images/cloud-academy-logo.png"
            break;
        case "khan academy":
            platformLogo = "/src/assets/Images/khan-academy-logo.png"
            break;
        case "coursera":
            platformLogo = "/src/assets/Images/coursera-logo.png"
            break;
        case "udemy":
            platformLogo = "/src/assets/Images/udemy-logo.png"
            break;
        default:
            break;
    }

    const starsCount = parseFloat(props.stars)
    var starsArray = []
    const wholeStars = Math.floor(starsCount)
    const halfStars = Math.ceil(starsCount - wholeStars)

    for( let i = 0; i < wholeStars; i++){
        starsArray.push(<img src="/src/assets/Images/star.png" className="star"/>)
    }
    if(halfStars > 0){
        starsArray.push(<img src="/src/assets/Images/half-star.png" className="star"/>)
    }

    return(
        <div className="course-card">
            <img src={props.thumbnail} alt="course thumbnail" className="course-thumbnail" />
            <div className="course-details">
                <p className="course-tag">{props.tag}</p>
                <h2 className="course-title">{props.title}</h2>
                <p className="course-duration">Duration : {props.duration}</p>
                <p className="course-price">{props.price == "free"? props.price : `$${props.price}`}</p>
                <img src={platformLogo} alt="platform logo" className="course-platform" />
                <div className="rating">
                    <div className="stars">{starsArray}</div>
                    <p className="reviews-count">({props.no_of_ratings})</p>
                </div>
            </div>
                <button className="enroll-button">Enroll Now</button>
            <a href="#" className="more-info-link">View More Info</a>
        </div>
    )
}

export default Course