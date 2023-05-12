import React from "react"
import Carousel from "./Carousel"
import Course from "./Course"
import "/src/CSS/popular-courses.css"
import coursesDatabase from "/src/Data/courseData"

function PopularCourses(){

    const [listFilters, setListFilters] = React.useState({
      "courseLevelFilter" : "intermediate"
    })

    const [booleanFilters, setBooleanFilters] = React.useState({
      "paidCoursesFilter" : false,
      "freeCoursesFilter" : false
    })

    const [sortValue, setSortValue] = React.useState("highestRating")
    
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
    
    function handleListFilters(event){ //callback function to handle list filters onChange events
      const name = event.target.name
      const value = event.target.value
      setListFilters(oldFilters => {
        return({
          ...oldFilters,
          [name]: value
        })
      })
    }

    const carouselItems = getCarouselItems(listFilters, booleanFilters, getCheckedBoxes(booleanFilters), sortValue)

    return(
        <section className="popular-courses" aria-labelledby="popular-courses-title">
          <h2 id="popular-courses-title">Popular Courses</h2>
          <div className="popular-courses-filters">
            <select onChange={handleListFilters}  name="courseLevelFilter" id="course-level-filter" className="course-level-list list-filter">
              <option value="beginner">Beginner</option>
              <option selected value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="free-courses-checkbox" className="checkbox-filter">
              <input onChange={handleBooleanFilters} type="checkbox" name="freeCoursesFilter" id="free-courses-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark" id="checkmark-image" /></div>
              Free Courses
            </label>
            <label htmlFor="paid-courses-checkbox" className="checkbox-filter">
              <input onChange={handleBooleanFilters} type="checkbox" name="paidCoursesFilter" id="paid-courses-checkbox" />
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

/*
  description: sorts the carouselItems array according to the sortValue state

  inputs:
    sortValue: value to sort the array by it
    carouselItems: an array of the items to be sorted

  return: none
*/
function sortItems(sortValue, carouselItems){
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

/*
  description: search for boolean filters that are checked or "true"

  inputs:
    booleanFilters: an object containing boolean filters and there values (true or false)
  
  return: an array of names of true boolean filters
*/
function getCheckedBoxes(booleanFilters){
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

/*
  description: decides whether an item passes the filter to be shown on the carousel or not.

  takes three inputs: 
    listFilters: an object containing list filters and their values
    booleanFilters: an object containing boolean filters and there values (true or false)
    checkedBoxes: an array holding the names of boolean filters that are checked or "true"
    item: the item to be filtered
    
  returns: true if the item passes the filters and false otherwise.
*/
function filterItem(listFilters, booleanFilters, checkedBoxes, item){
  if(listFilters["courseLevelFilter"] == item.level){
    if(checkedBoxes.length > 0){
      if(booleanFilters["freeCoursesFilter"] && item.price == "free"){
        return(true)
      }
      else if(booleanFilters["paidCoursesFilter"] && item.price !="free"){
        return(true)
      }
      else{
        return(false)
      }
    }
    else {
      return(true)
    }
  }
  else{
    return(false)
  }
}

/*
  description: gets a sorted and filtered array of items to be passed to the carousel component

  inputs:
    listFilters: an object containing list filters and their values
    sortValue: sortValue: value to sort the array by it
    checkedBoxes: an array holding the names of boolean filters that are checked or "true"
    booleanFilters: an object containing boolean filters and there values (true or false)

  return: an array of items passed to the carousel
*/
function getCarouselItems(listFilters, booleanFilters, checkedBoxes, sortValue){
  var carouselItems = []
  var item
  for(let i = 0; i < coursesDatabase.length; i++){
    item = coursesDatabase[i]

    if(filterItem(listFilters, booleanFilters, checkedBoxes, item)){
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

  sortItems(sortValue, carouselItems)

  return(carouselItems)
}