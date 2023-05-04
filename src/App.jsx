import React from "react"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import PopularCourses from "./Components/PopularCourses"
import CertificationCourses from "./Components/CertificationCourses"
import InstructedCourses from "./Components/InstructedCourses"
import Footer from "./Components/Footer"

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
        <PopularCourses/>
        <CertificationCourses/>
        <InstructedCourses/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
