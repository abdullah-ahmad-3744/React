import "./Cards.css"
import Card from '../components/Card'
function Cards({ courses, category }) {


    const getCourses = () => {
        if (category === "All") {
            let allCourses = []
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course)
                })
            })
            return allCourses
        }
        else {
            return courses[category]
        }
    }
    console.log(category)
    return (
        <div className="cards-container">
            {
                getCourses().map((course) => {
                    console.log("Category = ", category)
                    return <Card key={course.id} course={course} />
                })
            }
        </div>
    )
}
export default Cards;