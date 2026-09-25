import { getCourses } from '../../lib/courses'
import CourseCard from '../../components/CourseCard'

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <>
      <h1 className="text-2xl font-bold">Courses</h1>
      <div className="grid gap-4 mt-4">
        {courses.map((c) => (
          <CourseCard key={c.id} id={c.id} title={c.title} description={c.description} credits={c.credits} likes={c.likes} />
        ))}
      </div>
    </>
  )
}
