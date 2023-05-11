import "/src/CSS/tutor.css"

function Tutor(props){
    return(
        <div className="tutor">
            <img src={props.avatar} alt="tutor avatar" className="tutor-avatar" />
            <div className="tutor-info">
                <p className="tutor-name">{props.name}</p>
                <p className="tutor-specialization">{props.specialization}</p>
                <p className="tutor-courses-count">{props.no_of_courses} Courses</p>
                <p className="tutor-average-rating">
                    <img src="/src/assets/Images/star.png" alt="star" className="star" /> 4.9 <span className="number-of-ratings">({parseInt(props.no_of_ratings).toLocaleString()})</span>
                </p>
            </div>
        </div>
    )
}

export default Tutor