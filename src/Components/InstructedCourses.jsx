import Tutor from "./Tutor"
import "/src/CSS/instructed-courses.css"

function InstructedCourses(){
    return(
        <section className="instructed-courses">
            <h2 id="instructed-courses-title">Instructed Courses</h2>
            <div className="find-tutor">
                <p>Want someone to instruct you? No worries, here we introduce our CourseMania’s online Tutors  to assist & guide you in your professional  Path</p>
                <button className="find-tutor-button">Find A Tutor</button>
            </div>
            <div className="popular-tutors">
                <h3 id="popular-tutors-title">Meet Our Popular Tutors</h3>
                <div className="tutors">
                    <Tutor/>
                    <Tutor/>
                    <Tutor/>
                    <Tutor/>
                </div>
            </div>
        </section>
    )
}

export default InstructedCourses