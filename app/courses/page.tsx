import { getCourses } from '../../lib/courses'
import CourseCard from '../../components/CourseCard'

export const dynamic = 'force-dynamic'

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">The curriculum</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">All courses</h1>
        </div>
        <span className="text-sm text-slate-600">{courses.length} paths to explore</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((c) => (
          <CourseCard key={c.id} id={c.id} title={c.title} description={c.description} credits={c.credits} likes={c.likes} />
        ))}
      </div>
    </section>
  )
}
