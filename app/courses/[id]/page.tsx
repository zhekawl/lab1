import { getCourse, getCourses } from '../../../lib/courses'
import LikeButton from '../../../components/LikeButton'
import { notFound } from 'next/navigation'

type ParamsPromise = { id: string }

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const courses = await getCourses()
  return courses.map((c) => ({ id: c.id }))
}

export default async function CoursePage({ params }: { params: Promise<ParamsPromise> }) {
  const { id } = await params
  const course = await getCourse(id)

  if (!course) notFound()

  return (
    <article className="content-panel">
      <div className="detail-top">
        <div>
          <div className="eyebrow">Course details</div>
          <h1 className="content-title">{course.title}</h1>
        </div>
        <LikeButton initialLikes={course.likes} />
      </div>
      <p className="detail-description">{course.description}</p>
      <span className="detail-credit">{course.credits} credits</span>
    </article>
  )
}
