import Course from "./Course"
import "/src/CSS/carousel.css"

function Carousel(props){
    return(
        <div className="carousel">
            <div className="container">
                {props.items}
            </div>
        </div>
    )
}

export default Carousel