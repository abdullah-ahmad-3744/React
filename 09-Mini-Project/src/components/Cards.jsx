import "./Cards.css"
import Card from '../components/Card'
function Cards ({courses}) {
    console.log("Courses Data = ", courses);

    const getCourses = () => {
        let allCourses = []
        Object.values(courses).forEach ( (courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourses.push(course)
            })
        })
        return allCourses
    }
    



    return (
        <div className="cards-container">
            {
            getCourses().map( (course) => {
                return <Card key={course.id} course ={course} />
            })
            }
        </div>
    )
}
export default Cards;