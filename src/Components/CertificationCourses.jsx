import React from "react"
import "/src/CSS/certification-courses.css"
import Carousel from "./Carousel"
import Course from "./Course"

function CertificationCourses(props){

  const [sortValue, setSortValue] = React.useState("highestRating")

  const [booleanFilters, setBooleanFilters] = React.useState({
    "freeCertificationsFilter" : false,
    "paidCertificationsFilter" : false
  })

  function handleSort(event){ // callback function to handle sort list onChange events
    setSortValue(event.target.value)
  }

  function handleBooleanFilters(event){ //callback function to handle boolean filters onChange events
    const name = event.target.name
    setBooleanFilters(oldFilters => {
      return({
        ...oldFilters,
        [name]: event.target.checked
      })
    })
  }

  function getCheckedBoxes(){ // loops over the booleanFilters state and returns an array of checked boxes names
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

  function sortCourses(){ // sorts the carouselItems array according to the sortValue state
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

  function getCarouselItems(){  // returns an array of items to be passed to the carousel component
    const courseDatabase = props.courseDatabase
    var carouselItems = []
    var showCourse = false
    var item
    for(let i = 0; i < courseDatabase.length; i++){
  
      showCourse = false
      item = courseDatabase[i]
  
      if(checkedBoxes.length > 0){
        if(booleanFilters["freeCertificationsFilter"] && item.price == "free"){
          showCourse = true;
        }
        else if(booleanFilters["paidCertificationsFilter"] && item.price !="free"){
          showCourse = true;
        }
      }
      else {
        showCourse = true;
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
  
  const checkedBoxes = getCheckedBoxes() // an array of checked boxes names

  const carouselItems = getCarouselItems()

  sortCourses()

  return(
      <section className="certification-courses">
          <h2 id="certification-courses-title">Certifications Courses</h2>
        <div className="certification-courses-filters">
          <label htmlFor="free-certification-checkbox" className="checkbox-filter">
            <input onChange={handleBooleanFilters} type="checkbox" name="freeCertificationsFilter" id="free-certification-checkbox" />
            <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark"/></div>
            Free Certifications
          </label>
          <label htmlFor="paid-certifications-checkbox" className="checkbox-filter">
            <input onChange={handleBooleanFilters} type="checkbox" name="paidCertificationsFilter" id="paid-certifications-checkbox" />
            <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark"/></div>
            Paid Certifications
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

export default CertificationCourses