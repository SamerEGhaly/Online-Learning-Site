import React from "react"
import Carousel from "./Carousel"
import Course from "./Course"
import "/src/CSS/popular-courses.css"

function PopularCourses(props){

    const [filters, setFilters] = React.useState({
      "courseLevelFilter" : "intermediate",
      "paidCoursesFilter" : false,
      "freeCoursesFilter" : false
    })

    console.log(filters)

    function modifyFilters(event){
      const name = event.target.name
      const value = event.target.value
      const type = event.target.type
      if(type == "checkbox"){
        setFilters(oldFilters => {
          return({
            ...oldFilters,
            [name]: event.target.checked
          })
        })
      }
      else{
        setFilters(oldFilters => {
          return({
            ...oldFilters,
            [name]: value
          })
        })
      }
    }

    const carouselItems = props.courseDatabase.map((item) => {

      return(
        <Course 
          key={item.id}
          title={item.title}
          duration={item.duration}
          price={item.price}
          platform={item.platform}
          stars={item.stars}
          no_of_ratings={item.no_of_ratings}
          tag={item.tag}
          thumbnail={item.thumbnail}
          certified={item.certified}
        />
      )
    })

    return(
        <section className="popular-courses" aria-labelledby="popular-courses-title">
          <h2 id="popular-courses-title">Popular Courses</h2>
          <div className="popular-courses-filters">
            <select onChange={modifyFilters}  name="courseLevelFilter" id="course-level-filter" className="course-level-list list-filter">
              <option value="beginner">Beginner</option>
              <option selected value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="free-courses-checkbox" className="checkbox-filter">
              <input onChange={modifyFilters} type="checkbox" name="freeCoursesFilter" id="free-courses-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark" id="checkmark-image" /></div>
              Free Courses
            </label>
            <label htmlFor="paid-courses-checkbox" className="checkbox-filter">
              <input onChange={modifyFilters} type="checkbox" name="paidCoursesFilter" id="paid-courses-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark" id="checkmark-image" /></div>
              Paid Courses
            </label>
            <label htmlFor="sort-filter" className="sort-list-label">
              Sort by: 
              <select name="sortList" id="sort-filter" className="sort-list list-filter">
                <option selected value="highestRating">Highest Rating</option>
                <option value="lowestRating">Lowest Rating</option>
                <option value="highestPrice">Highest Price</option>
                <option value="lowestPrice">Lowest Price</option>
                <option value="mostViewed">Most Viewed</option>
              </select>
            </label>
          </div>
          <Carousel items={carouselItems}/>
        </section>
    )
}

export default PopularCourses