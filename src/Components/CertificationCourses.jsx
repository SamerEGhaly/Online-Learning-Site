import "/src/CSS/certification-courses.css"
import Carousel from "./Carousel"
import Course from "./Course"

function CertificationCourses(props){

  const carouselItems = props.courseDatabase.map((item) => {
    
    if(item.certified){
      return(
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
  })
  
    return(
        <section className="certification-courses">
            <h2 id="certification-courses-title">Certifications Courses</h2>
          <div className="certification-courses-filters">
            <label htmlFor="free-certification-checkbox" className="checkbox-filter">
              <input type="checkbox" name="freeCertificationsFilter" id="free-certification-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark"/></div>
              Free Certifications
            </label>
            <label htmlFor="paid-certifications-checkbox" className="checkbox-filter">
              <input type="checkbox" name="paidCertificationsFilter" id="paid-certifications-checkbox" />
              <div className="custom-checkbox"><img src="/src/assets/Images/white-checkmark.png" alt="checkmark"/></div>
              Paid Certifications
            </label>
            <label htmlFor="sort-filter" className="sort-list-label">
              Sort by: 
              <select name="sortList" id="sort-filter" className="sort-list list-filter">
                <option selected value="highestRating">Highest Rating</option>
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