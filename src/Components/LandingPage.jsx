import React from "react"
import "/src/CSS/landing-page.css"

function LandingPage(){

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

    return(
        <section className="landing-page">
            <img src="\src\assets\Images\landing-page-background.png" alt="girl sitting infront of laptop background" className="landing-page-background" />
            <div className="landing-page-contents">
                <input onChange={handleSearchInput} type="text" className="search-box" name="searchBox" placeholder="Search for courses" input={searchText}/>
                <p>Explore what professionals like you are learning the most</p>
                <button className="visitCourses">Visit Courses</button>
            </div>
        </section>
    )
}

export default LandingPage