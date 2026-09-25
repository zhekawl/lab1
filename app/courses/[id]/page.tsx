import { getCourse, getCourses } from '../../../lib/courses'
import LikeButton from '../../../components/LikeButton'
import { notFound } from 'next/navigation'

type ParamsPromise = { id: string }

export async function generateStaticParams() {
  const courses = await getCourses()
  return courses.map((c) => ({ id: c.id }))
}

export default async function CoursePage({ params }: { params: Promise<ParamsPromise> }) {
  const { id } = await params
  const course = await getCourse(id)

  if (!course) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-2">{course.description}</p>
      <p className="mt-2">Credits: {course.credits}</p>
      <div className="mt-4">
        <LikeButton initialLikes={course.likes} />
      </div>
    </div>
  )
}
