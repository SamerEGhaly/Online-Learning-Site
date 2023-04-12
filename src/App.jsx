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
      </main>
    </div>
  )
}

export default App
