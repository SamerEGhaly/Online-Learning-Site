import React from "react"
import Course from "./Components/Course"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"

function App() {

  return (
    <div className="main-container">
      <Header/>
      <main>
        <LandingPage/>
        <section className="online-courses-platforms">
          <img src="/src/assets/Images/udemy-logo.png" alt="udemy logo" />
          <img src="/src/assets/Images/khan-academy-logo.png" alt="khan academy logo" />
          <img src="/src/assets/Images/cloud-academy-logo.png" alt="cloud academy logo" />
          <img src="/src/assets/Images/coursera-logo.png" alt="coursera logo" />
        </section>
        <section className="popular-courses" aria-labelledby="popular-courses-title">
          <h2 id="popular-courses-title">Popular Courses</h2>
          <div className="popular-courses-filters">
            <select name="courseLevelFilter" id="course-level-filter" className="course-level-list">
              <option value="beginner">Beginner</option>
              <option selected value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="free-courses-filter">
              <input type="checkbox" name="freeCoursesFilter" id="free-courses-filter" />
              Free Courses
            </label>
            <label htmlFor="paid-courses-filter">
              <input type="checkbox" name="paidCoursesFilter" id="paid-courses-filter" />
              Paid Courses
            </label>
            <label htmlFor="sort-filter">Sort by: </label>
            <select name="sortList" id="sort-filter" >
              <option selected value="highestRating">Highest Rating</option>
              <option value="lowestRating">Lowest Rating</option>
              <option value="highestPrice">Highest Price</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="mostViewed">Most Viewed</option>
            </select>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
