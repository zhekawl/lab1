import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type CourseCardProps = {
  id: string
  title: string
  description: string
  credits: number
  likes: number
}

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} prefetch={false} className="block h-full">
      <Card className="h-full border-slate-200 bg-white/90 transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/80">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-0">
          <p className="flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
          <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{credits} credits</span>
            <Button variant="ghost" size="sm" className="rounded-full px-2 py-1 text-slate-600 hover:bg-slate-100 hover:text-orange-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-orange-400">
              <span aria-hidden="true">❤</span>
              <span>{likes}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
