import React from "react"
import Course from "./Components/Course"
import Header from "./Components/Header"

function App() {

  const [searchText, setSearchText] = React.useState("")

  function handleSearchInput(event){
    const name = event.target.name
    const value = event.target.value

    if(name == "searchBox"){
      setSearchText(value)
      return true
    }
    return false
  }

  return (
    <div className="main-container">
      <Header/>
      <main>
        <section className="landing-page">
          <input onChange={handleSearchInput} type="text" className="search-box" name="searchBox" placeholder="Search for courses" input={searchText}/>
          <p>Explore what professionals like you are learning the most</p>
          <button className="visitCourses">Visit Courses</button>
        </section>
      </main>
    </div>
  )
}

export default App
