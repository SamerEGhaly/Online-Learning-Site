import "/src/CSS/tutor.css"

function Tutor(){
    return(
        <div className="tutor">
            <img src="/src/assets/Images/tutor-avatar.png" alt="tutor avatar" className="tutor-avatar" />
            <div className="tutor-info">
                <p className="tutor-name">Robert James</p>
                <p className="tutor-specialization">UI/UX Designer</p>
                <p className="tutor-courses-count">56 Courses</p>
                <p className="tutor-average-rating">
                    <img src="/src/assets/Images/star.png" alt="star" className="star" /> 4.9 <span className="number-of-ratings">(76,335)</span>
                </p>
            </div>
        </div>
    )
}

export default Tutor