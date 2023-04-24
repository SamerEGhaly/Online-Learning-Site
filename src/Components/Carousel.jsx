import Course from "./Course"
import "/src/CSS/carousel.css"

function Carousel(){
    return(
        <div className="carousel">
            <div className="container">
                <Course/>
                <Course/>
                <Course/>
                <Course/>
            </div>
        </div>
    )
}

export default Carousel