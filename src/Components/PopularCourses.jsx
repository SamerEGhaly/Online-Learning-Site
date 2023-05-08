import React from "react"
import Carousel from "./Carousel"
import Course from "./Course"
import "/src/CSS/popular-courses.css"

function PopularCourses(props){

    const [listfilters, setListFilters] = React.useState({
      "courseLevelFilter" : "intermediate"
    })

    const [booleanFilters, setBooleanFilters] = React.useState({
      "paidCoursesFilter" : false,
      "freeCoursesFilter" : false
    })

    const [sortValue, setSortValue] = React.useState("highestRating")

    console.log(sortValue)

    function handleSort(event){ // callback function that modifies the sortValue state
      setSortValue(event.target.value)
    }

    function sortCourses(){
      if(sortValue == "highestRating"){
        for(let i = 0; i < carouselItems.length; i++){
          for(let j = 0, k = 1; k < carouselItems.length - i; j++, k++){
            var currentRating = parseFloat(carouselItems[j].props.stars)
            var nextRating = parseFloat(carouselItems[k].props.stars)
            if(currentRating < nextRating){
              var temp = carouselItems[j]
              carouselItems[j] = carouselItems[k]
              carouselItems[k] = temp
            }
          }
        }
      }
      else if(sortValue == "lowestRating"){
        for(let i = 0; i < carouselItems.length; i++){
          for(let j = 0, k = 1; k < carouselItems.length - i; j++, k++){
            var currentRating = parseFloat(carouselItems[j].props.stars)
            var nextRating = parseFloat(carouselItems[k].props.stars)
            if(currentRating > nextRating){
              var temp = carouselItems[j]
              carouselItems[j] = carouselItems[k]
              carouselItems[k] = temp
            }
          }
        }
      }
    }

    function getCheckedBoxes(){
      var checkedBoxes = []
      for (const key in booleanFilters) {
        if (Object.hasOwnProperty.call(booleanFilters, key)) {
          if(booleanFilters[key]){
            checkedBoxes.push(key)
          }
        }
      }
      return checkedBoxes
    }

    function modifyBooleanFilters(event){
      const name = event.target.name
      setBooleanFilters(oldFilters => {
        return({
          ...oldFilters,
          [name]: event.target.checked
        })
      })
    }

    function modifyListFilters(event){
      const name = event.target.name
      const value = event.target.value
      setListFilters(oldFilters => {
        return({
          ...oldFilters,
          [name]: value
        })
      })
    }

    const checkedBoxes = getCheckedBoxes() // get a list of checked boxes names
    
    function getCarouselItems(){
      const courseDatabase = props.courseDatabase
      var carouselItems = []
      var showCourse = false
      var item
      for(let i = 0; i < courseDatabase.length; i++){

        showCourse = false
        item = courseDatabase[i]

        if(listfilters["courseLevelFilter"] == item.level){
          if(checkedBoxes.length > 0){
            if(booleanFilters["freeCoursesFilter"] && item.price == "free"){
              showCourse = true;
            }
            else if(booleanFilters["paidCoursesFilter"] && item.price !="free"){
              showCourse = true;
            }
          }
          else {
            showCourse = true;
          }
        }
        else{
          showCourse = false;
        }
  
        if(showCourse){
          carouselItems.push(
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
        }
      } // end of for loop

      return(carouselItems)
    }

    const carouselItems = getCarouselItems()

    sortCourses()

    return(
        <section className="popular-courses" aria-labelledby="popular-courses-title">
          <h2 id="popular-courses-title">Popular Courses</h2>
          <div className="popular-courses-filters">
            <select onChange={modifyListFilters}  name="courseLevelFilter" id="course-level-filter" className="course-level-list list-filter">
              <option value="beginner">Beginner</option>
              <option selected value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="free-courses-checkbox" className="checkbox-filter">
              <input onChange={modifyBooleanFilters} type="checkbox" name="freeCoursesFilter" id="free-courses-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark" id="checkmark-image" /></div>
              Free Courses
            </label>
            <label htmlFor="paid-courses-checkbox" className="checkbox-filter">
              <input onChange={modifyBooleanFilters} type="checkbox" name="paidCoursesFilter" id="paid-courses-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark" id="checkmark-image" /></div>
              Paid Courses
            </label>
            <label htmlFor="sort-filter" className="sort-list-label">
              Sort by: 
              <select onChange={handleSort} value={sortValue} name="sortList" id="sort-filter" className="sort-list list-filter">
                <option value="highestRating">Highest Rating</option>
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