import React from "react"
import "/src/CSS/certification-courses.css"
import Carousel from "./Carousel"
import Course from "./Course"
import coursesDatabase from "/src/Data/courseData"

function CertificationCourses(){

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

  const carouselItems = getCarouselItems(sortValue, getCheckedBoxes(booleanFilters), booleanFilters)

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
  description: decides whether an item passes the filter to be shown on the carousel or not.

  takes three inputs: 
    booleanFilters: an object containing boolean filters and there values (true or false)
    checkedBoxes: an array holding the names of boolean filters that are checked or "true"
    item: the item to be filtered
    
  returns: true if the item passes the filters and false otherwise.
*/
function filterItem(booleanFilters, checkedBoxes, item){
  if(checkedBoxes.length > 0){
    if(booleanFilters["freeCertificationsFilter"] && item.price == "free"){
      return(true)
    }
    else if(booleanFilters["paidCertificationsFilter"] && item.price !="free"){
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

/*
  description: gets a sorted and filtered array of items to be passed to the carousel component

  inputs:
    sortValue: sortValue: value to sort the array by it
    checkedBoxes: an array holding the names of boolean filters that are checked or "true"
    booleanFilters: an object containing boolean filters and there values (true or false)

  return: an array of items passed to the carousel
*/
function getCarouselItems(sortValue, checkedBoxes, booleanFilters){
  var carouselItems = []
  var item

  for(let i = 0; i < coursesDatabase.length; i++){

    item = coursesDatabase[i]

    if(filterItem(booleanFilters, checkedBoxes, item)){
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