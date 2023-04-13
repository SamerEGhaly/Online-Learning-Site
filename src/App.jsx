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
      </main>
    </div>
  )
}

export default App
